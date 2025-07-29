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
		<div className='flex-1 w-full flex items-center justify-center py-20 px-4 bg-white'>
			<div className='w-full max-w-md bg-white rounded-xl shadow-md p-6'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Tizimga kirish</h2>
				<p className='text-base text-zinc-700 mb-3'>
					Iltimos, telefon raqamingizni kiriting:
				</p>

				<div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						shapeRendering='geometricPrecision'
						textRendering='geometricPrecision'
						imageRendering='optimizeQuality'
						fillRule='evenodd'
						clipRule='evenodd'
						viewBox='0 0 513 357.071'
						width={24}
						height={24}
					>
						<path
							fill='#1EB53A'
							fillRule='nonzero'
							d='M28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v300.111c0 15.488-12.671 28.16-28.159 28.16H28.477c-15.486 0-28.157-12.672-28.157-28.16V28.48C.32 12.992 12.991.32 28.477.32z'
						/>
						<path
							fill='#0099B5'
							fillRule='nonzero'
							d='M512.68 178.536H.32V28.48C.32 12.992 12.991.32 28.477.32h456.044c15.488 0 28.159 12.672 28.159 28.16v150.056z'
						/>
						<path
							fill='#CE1126'
							fillRule='nonzero'
							d='M.32 114.377h512.36v128.317H.32z'
						/>
						<path
							fill='#fff'
							fillRule='nonzero'
							d='M.32 121.505h512.36v114.06H.32z'
						/>
						<path
							fill='#fff'
							d='M96.068 14.574c2.429 0 4.81.206 7.129.596-20.218 3.398-35.644 20.998-35.644 42.177 0 21.178 15.426 38.778 35.644 42.176-2.319.39-4.7.596-7.129.596-23.607 0-42.772-19.165-42.772-42.772 0-23.608 19.165-42.773 42.772-42.773zm94.1 68.437l-1.921 5.91h-6.216l5.029 3.654-1.92 5.911 5.028-3.654 5.028 3.654-1.921-5.911 5.029-3.654h-6.216l-1.92-5.91zm-39.247-18.743l1.921-5.911-5.028-3.654h6.215l1.92-5.911 1.921 5.911h6.216l-5.029 3.654 1.92 5.911-5.028-3.654-5.028 3.654zm0 34.218l1.921-5.911-5.028-3.654h6.215l1.92-5.91 1.921 5.91h6.216l-5.029 3.654 1.92 5.911-5.028-3.654-5.028 3.654zm-34.217 0l1.92-5.911-5.028-3.654h6.216l1.919-5.91 1.921 5.91h6.216l-5.029 3.654 1.92 5.911-5.028-3.654-5.027 3.654zm136.872-68.437l1.921-5.91-5.03-3.654h6.216l1.921-5.911 1.921 5.911h6.215l-5.029 3.654 1.921 5.91-5.028-3.653-5.028 3.653zm0 34.219l1.921-5.911-5.03-3.654h6.216l1.921-5.911 1.921 5.911h6.215l-5.029 3.654 1.921 5.911-5.028-3.654-5.028 3.654zm0 34.218l1.921-5.911-5.03-3.654h6.216l1.921-5.91 1.921 5.91h6.215l-5.029 3.654 1.921 5.911-5.028-3.654-5.028 3.654zm-34.218-68.437l1.92-5.91-5.029-3.654h6.216l1.921-5.911 1.92 5.911h6.216l-5.029 3.654 1.92 5.91-5.027-3.653-5.028 3.653zm0 34.219l1.92-5.911-5.029-3.654h6.216l1.921-5.911 1.92 5.911h6.216l-5.029 3.654 1.92 5.911-5.027-3.654-5.028 3.654zm0 34.218l1.92-5.911-5.029-3.654h6.216l1.921-5.91 1.92 5.91h6.216l-5.029 3.654 1.92 5.911-5.027-3.654-5.028 3.654zM185.14 30.049l1.92-5.91-5.029-3.654h6.216l1.921-5.911 1.92 5.911h6.216l-5.029 3.654 1.921 5.91-5.028-3.653-5.028 3.653zm0 34.219l1.92-5.911-5.029-3.654h6.216l1.921-5.911 1.92 5.911h6.216l-5.029 3.654 1.921 5.911-5.028-3.654-5.028 3.654z'
						/>
						<path
							fill='#CCC'
							fillRule='nonzero'
							d='M28.48 0h456.04c7.833 0 14.953 3.204 20.115 8.365C509.796 13.527 513 20.647 513 28.479v300.112c0 7.832-3.204 14.953-8.365 20.115-5.162 5.161-12.282 8.365-20.115 8.365H28.48c-7.833 0-14.953-3.204-20.115-8.365C3.204 343.544 0 336.423 0 328.591V28.479c0-7.832 3.204-14.952 8.365-20.114C13.527 3.204 20.647 0 28.48 0zm456.04.641H28.48c-7.656 0-14.616 3.132-19.661 8.178C3.773 13.864.641 20.824.641 28.479v300.112c0 7.656 3.132 14.616 8.178 19.661 5.045 5.046 12.005 8.178 19.661 8.178h456.04c7.656 0 14.616-3.132 19.661-8.178 5.046-5.045 8.178-12.005 8.178-19.661V28.479c0-7.655-3.132-14.615-8.178-19.66C499.136 3.773 492.176.641 484.52.641z'
						/>
					</svg>
					<span className='text-base text-zinc-800'>+998</span>
					<input
						type='tel'
						inputMode='numeric'
						pattern='[0-9]*'
						value={phone}
						onChange={handlePhoneChange}
						placeholder='__ ___ __ __'
						className='flex-1 outline-none bg-transparent text-base ml-2'
						maxLength={13}
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
					disabled={
						!agree || !uzPhoneRegex.test(phone.replace(/\D/g, '')) || isLoading
					}
					className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition ${
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
