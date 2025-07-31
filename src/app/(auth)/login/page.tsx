'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import AuthService from '@/services/AuthService'
import {
	setPhoneStart,
	setPhoneSuccess,
	setPhoneFailure,
} from '@/redux/slices/authSlice'
import { RootState } from '@/redux/store'

const uzPhoneRegex = /^[0-9]{9}$/

const LoginPage = () => {
	const { isLoading } = useSelector((state: RootState) => state.auth)
	const [phone, setPhoneValue] = useState('')
	const [agree, setAgree] = useState(false)
	const router = useRouter()
	const dispatch = useDispatch()

	const handleSubmit = async () => {
		const cleanedPhone = phone.replace(/\D/g, '')

		if (!uzPhoneRegex.test(cleanedPhone)) {
			toast.error('Telefon raqami noto‘g‘ri. 9 ta raqam kiriting.')
			return
		}

		if (!agree) {
			toast.error('Foydalanish shartlariga rozilik bildiring.')
			return
		}

		dispatch(setPhoneStart())

		try {
			await AuthService.sendCode(`+998${cleanedPhone}`)
			dispatch(setPhoneSuccess(`+998${cleanedPhone}`))
			toast.success('Kod muvaffaqiyatli yuborildi!')
			router.push('/verify')
		} catch (e) {
			console.error(e)
			dispatch(setPhoneFailure('Kod yuborilmadi'))
			toast.error('Kod yuborishda xatolik yuz berdi.')
		}
	}

	const formatUzbekPhone = (value: string) => {
		const cleaned = value.replace(/\D/g, '').slice(0, 9)
		const match = cleaned.match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
		if (!match) return ''
		const [, p1, p2, p3, p4] = match
		return [p1, p2, p3, p4].filter(Boolean).join(' ')
	}

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value
		const digitsOnly = rawValue.replace(/\D/g, '')
		const formatted = formatUzbekPhone(digitsOnly)
		setPhoneValue(formatted)
	}

	return (
		<div className='flex-1 w-full flex items-center justify-center px-4 sm:px-6 py-10 bg-white'>
			<div className='w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-6'>
				<h2 className='text-xl sm:text-2xl font-bold mb-4 text-center'>
					Tizimga kirish
				</h2>
				<p className='text-sm sm:text-base text-zinc-700 mb-3 text-center sm:text-left'>
					Iltimos, telefon raqamingizni kiriting:
				</p>

				{/* Phone Input */}
				<div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-4'>
					{/* Flag */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						shapeRendering='geometricPrecision'
						textRendering='geometricPrecision'
						imageRendering='optimizeQuality'
						fillRule='evenodd'
						clipRule='evenodd'
						viewBox='0 0 513 357.071'
						width={22}
						height={22}
					>
						<path
							fill='#1EB53A'
							d='M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z'
						/>
						<path
							fill='#0099B5'
							d='M512.68 178.536H.32V28.48C.32 12.992 12.991.32 28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v150.056z'
						/>
						<path fill='#CE1126' d='M.32 114.377h512.36v128.317H.32z' />
						<path fill='#fff' d='M.32 121.505h512.36v114.06H.32z' />
					</svg>

					<span className='text-sm sm:text-base text-zinc-800'>+998</span>
					<input
						type='tel'
						inputMode='numeric'
						pattern='[0-9]*'
						value={phone}
						onChange={handlePhoneChange}
						placeholder='__ ___ __ __'
						className='flex-1 outline-none bg-transparent text-sm sm:text-base ml-1'
						maxLength={13}
					/>
				</div>

				{/* Agreement */}
				<div className='flex items-start gap-2 mb-4'>
					<input
						type='checkbox'
						checked={agree}
						onChange={() => setAgree(!agree)}
						className='accent-sky-500 mt-1'
					/>
					<label className='text-sm sm:text-base text-zinc-700 font-medium'>
						Men{' '}
						<Link href='/agreement' className='text-sky-500 hover:underline'>
							foydalanuvchi shartlariga
						</Link>{' '}
						roziman
					</label>
				</div>

				{/* Submit Button */}
				<button
					onClick={handleSubmit}
					disabled={
						!agree || !uzPhoneRegex.test(phone.replace(/\D/g, '')) || isLoading
					}
					className={`w-full py-3 rounded-lg text-white text-sm sm:text-lg font-semibold transition ${
						!agree || !uzPhoneRegex.test(phone.replace(/\D/g, '')) || isLoading
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-sky-600 hover:bg-sky-700'
					}`}
				>
					{isLoading ? 'Yuborilmoqda...' : 'Kodni olish'}
				</button>
			</div>
		</div>
	)
}

export default LoginPage
