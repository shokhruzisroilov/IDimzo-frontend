'use client'

import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { RootState } from '@/redux/store'
import {
	loginStart,
	loginSuccess,
	loginFailure,
} from '@/redux/slices/authSlice'
import AuthService from '@/services/AuthService'

export default function VerifyPage() {
	const { phone, isLoading } = useSelector((state: RootState) => state.auth)
	const [code, setCode] = useState(['', '', '', ''])
	const inputRefs = useRef<HTMLInputElement[]>([])
	const [timer, setTimer] = useState(60)
	const [resendActive, setResendActive] = useState(false)
	const [error, setError] = useState('')
	const router = useRouter()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!phone) {
			router.push('/login')
			return
		}

		// bo'lsa birinchi inputga fokus
		inputRefs.current[0]?.focus()
	}, [phone, router])

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer(prev => prev - 1)
			}, 1000)
			return () => clearInterval(interval)
		} else {
			setResendActive(true)
		}
	}, [timer])

	const handleInputChange = (value: string, index: number) => {
		if (!/^\d*$/.test(value)) return
		const newCode = [...code]
		newCode[index] = value
		setCode(newCode)
		if (value && index < 3) {
			inputRefs.current[index + 1]?.focus()
		}
	}

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace' && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
		if (e.key === 'Enter' && code.every(c => c !== '')) {
			handleVerify()
		}
	}

	const handleVerify = async () => {
		const finalCode = code.join('')
		if (finalCode.length < 4) {
			toast.error('Kodni to‘liq kiriting')
			return
		}
		dispatch(loginStart())
		try {
			const res = await AuthService.verifyCode({
				phoneNumber: phone,
				code: finalCode,
			})
			dispatch(
				loginSuccess({
					accessToken: res.accessToken,
					refreshToken: res.refreshToken,
				})
			)

			toast.success('Tizimga muvaffaqiyatli kirdingiz!')
			router.push('/admin')
		} catch (err) {
			console.error(err)
			setError('Kod noto‘g‘ri yoki serverda muammo bor.')
			dispatch(loginFailure('Kod noto‘g‘ri'))
			toast.error('Kod xato yoki serverda xatolik.')
		}
	}

	const handleResend = async () => {
		try {
			await AuthService.sendCode(phone)
			toast.success('Kod qayta yuborildi!')
			setTimer(60)
			setResendActive(false)
			setCode(['', '', '', ''])
			inputRefs.current[0]?.focus()
		} catch (err) {
			console.log(err)
			toast.error('Kod yuborilmadi.')
		}
	}

	return (
		<div className='flex-1 w-full flex items-center justify-center bg-white px-4 py-10'>
			<div className='w-full max-w-[516px] bg-white rounded-[10px] shadow-[0px_0px_14px_0px_rgba(0,138,255,0.25)] p-6 sm:p-10'>
				<p className='text-xl sm:text-2xl text-black font-bold mb-4 text-center sm:text-left'>
					Tasdiqlash kodi
				</p>
				<p className='text-base sm:text-lg text-black mb-6 text-center sm:text-left'>
					<b>{phone}</b> raqamiga tasdiqlash kodi yuborildi. Iltimos, kodni
					kiriting.
				</p>

				<div className='flex justify-center gap-3 sm:gap-4 mb-6'>
					{code.map((value, index) => (
						<input
							key={index}
							type='text'
							maxLength={1}
							value={value}
							ref={el => {
								if (el) inputRefs.current[index] = el
							}}
							onChange={e => handleInputChange(e.target.value, index)}
							onKeyDown={e => handleKeyDown(e, index)}
							className='w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl text-black border-none outline-none bg-sky-500/10 rounded-[10px]'
						/>
					))}
				</div>

				{resendActive ? (
					<p
						className='text-center text-blue-600 font-semibold cursor-pointer mb-4'
						onClick={handleResend}
					>
						Kodni qayta yuborish
					</p>
				) : (
					<p className='text-sm sm:text-base text-black text-center mb-4'>
						Qayta yuborish uchun {timer} soniya qoldi
					</p>
				)}

				{error && (
					<p className='text-center text-red-500 text-sm mb-2'>{error}</p>
				)}

				<button
					onClick={handleVerify}
					className={`w-full h-12 sm:h-14 rounded-[10px] text-white text-base sm:text-lg font-semibold font-['Archivo_Black'] transition ${
						isLoading
							? 'bg-[#008AFF]/70 cursor-wait'
							: code.every(c => c !== '')
							? 'bg-[#008AFF] hover:bg-[#0077d1]'
							: 'bg-gray-400 cursor-not-allowed'
					}`}
					disabled={code.some(c => c === '') || isLoading}
				>
					{isLoading ? 'Tekshirilmoqda...' : 'Tasdiqlash'}
				</button>
			</div>
		</div>
	)
}
