'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import AuthService from '@/services/AuthService'
import { setPhone } from '@/redux/slices/authSlice'

const uzPhoneRegex = /^[0-9]{9}$/

const LoginPage = () => {
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

		try {
			await AuthService.sendCode(`+998${cleanedPhone}`)
			dispatch(setPhone(`+998${cleanedPhone}`))
			toast.success('Kod muvaffaqiyatli yuborildi!')
			router.push('/verify')
		} catch (e) {
			console.error(e)
			toast.error('Kod yuborishda xatolik yuz berdi.')
		}
	}

	return (
		<div className='flex-1 w-full flex items-center justify-center py-20 px-4 bg-white'>
			<div className='w-full max-w-md bg-white rounded-xl shadow-md p-6'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Tizimga kirish</h2>
				<p className='text-base text-zinc-700 mb-3'>
					Iltimos, telefon raqamingizni kiriting:
				</p>

				<div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-4'>
					<span>🇺🇿</span>
					<span className='text-base text-zinc-800'>+998</span>
					<input
						type='tel'
						inputMode='numeric'
						pattern='[0-9]*'
						value={phone}
						onChange={e => setPhoneValue(e.target.value.replace(/\D/g, ''))}
						placeholder=''
						className='flex-1 outline-none bg-transparent text-base ml-2'
						maxLength={9}
					/>
				</div>

				<div className='flex items-start gap-2 mb-4'>
					<input
						type='checkbox'
						checked={agree}
						onChange={() => setAgree(!agree)}
						className='accent-sky-500 mt-1'
					/>
					<label className='text-base text-zinc-700 font-medium'>
						Men{' '}
						<Link href='/agreement' className='text-sky-500 hover:underline'>
							foydalanuvchi shartlariga
						</Link>{' '}
						roziman
					</label>
				</div>

				<button
					onClick={handleSubmit}
					className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition ${
						agree && uzPhoneRegex.test(phone)
							? 'bg-sky-600 hover:bg-sky-700'
							: 'bg-gray-400 cursor-not-allowed'
					}`}
					disabled={!agree || !uzPhoneRegex.test(phone)}
				>
					Kodni olish
				</button>
			</div>
		</div>
	)
}

export default LoginPage
