'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function VerifyPage() {
	const [code, setCode] = useState(['', '', '', ''])
	const [timer, setTimer] = useState(30)
	const [error, setError] = useState('')
	const [resendActive, setResendActive] = useState(false)
	const router = useRouter()
	const inputRefs = useRef<Array<HTMLInputElement | null>>([])

	useEffect(() => {
		if (timer <= 0) {
			setResendActive(true)
			return
		}
		const interval = setInterval(() => setTimer(t => t - 1), 1000)
		return () => clearInterval(interval)
	}, [timer])

	const handleInputChange = (value: string, index: number) => {
		if (!/^\d?$/.test(value)) return
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
		if (e.key === 'Backspace') {
			if (code[index] === '' && index > 0) {
				const newCode = [...code]
				newCode[index - 1] = ''
				setCode(newCode)
				inputRefs.current[index - 1]?.focus()
			}
		}
	}

	const handleVerify = () => {
		const joined = code.join('')
		if (joined === '1234') {
			router.push('/admin')
		} else {
			setError('Kod noto‘g‘ri')
		}
	}

	const handleResend = () => {
		// bu yerda API orqali qayta yuborish ishlatiladi
		setTimer(30)
		setResendActive(false)
		setCode(['', '', '', ''])
		setError('')
		inputRefs.current[0]?.focus()
	}

	return (
		<div className='min-h-screen flex flex-col items-center justify-start bg-white py-20 px-4'>
			<h2 className='text-3xl font-semibold text-neutral-900 mb-8 '>
				Авторизоваться
			</h2>

			<div className='w-[516px] h-[440px] relative bg-white rounded-[10px] shadow-[0px_0px_14px_0px_rgba(0,138,255,0.25)] p-10'>
				<p className='text-2xl text-black font-bold mb-4 '>Введите код</p>

				<p className='text-lg text-black mb-6 '>
					На номер <b>+998 77 404-40-40</b> был отправлен код для подтверждения
					вашего номера телефона.
				</p>

				{/* Code Inputs */}
				<div className='flex justify-between w-96 mx-auto mb-6'>
					{code.map((value, index) => (
						<input
							key={index}
							id={`code-${index}`}
							ref={el => {
								inputRefs.current[index] = el
							}}
							type='text'
							maxLength={1}
							value={value}
							onChange={e => handleInputChange(e.target.value, index)}
							onKeyDown={e => handleKeyDown(e, index)}
							className='w-14 h-14 text-center text-2xl text-black border-none outline-none bg-sky-500/10 rounded-[10px]'
						/>
					))}
				</div>

				{/* Timer or Resend */}
				{resendActive ? (
					<p
						className='text-center text-blue-600 font-semibold cursor-pointer mb-4'
						onClick={handleResend}
					>
						Kodeni Qayta yuborish
					</p>
				) : (
					<p className='text-lg text-black text-center mb-4'>{timer} soniya</p>
				)}

				{/* Error */}
				{error && (
					<p className='text-center text-red-500 text-sm mb-2'>{error}</p>
				)}

				{/* Confirm Button */}
				<button
					onClick={handleVerify}
					className={`w-full h-14 rounded-[10px] text-white text-lg font-semibold font-['Archivo_Black'] transition ${
						code.every(c => c !== '')
							? 'bg-[#008AFF] hover:bg-[#0077d1]'
							: 'bg-gray-400 cursor-not-allowed'
					}`}
					disabled={code.some(c => c === '') || timer <= 0}
				>
					Подтверждение
				</button>
			</div>
		</div>
	)
}
