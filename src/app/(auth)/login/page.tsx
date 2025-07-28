'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
	const [phone, setPhone] = useState('')
	const [agree, setAgree] = useState(false)
	const router = useRouter()

	const handleSubmit = () => {
		if (agree && phone.length >= 9) {
			// phone raqamni localStorage ga saqlab qo'yamiz (yoki context/state)
			localStorage.setItem('userPhone', phone)
			router.push('/verify') // verify sahifaga yo‘naltiramiz
		}
	}

	return (
		<div className='min-h-screen flex justify-center items-start py-20 px-4 bg-white'>
			<div className='w-full max-w-md bg-white rounded-xl shadow-md p-6'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Авторизоваться</h2>

				<p className='text-base text-zinc-700 mb-3'>
					Введите свой номер телефона!
				</p>
				<div className='flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 mb-4'>
					<span>🇺🇿</span>
					<span className='text-base text-zinc-800'>+998</span>
					<input
						type='number'
						placeholder='__ ___ __ __'
						value={phone}
						onChange={e => setPhone(e.target.value)}
						className='flex-1 outline-none bg-transparent text-base ml-2'
					/>
				</div>

				<div className='flex items-start gap-2 mb-4'>
					<input
						type='checkbox'
						checked={agree}
						onChange={() => setAgree(!agree)}
						className='accent-sky-500 mt-1'
					/>
					<label className='text-base text-zinc-700 font-semibold'>
						Я прочитал{' '}
						<Link href='/agreement' className='text-sky-500 hover:underline'>
							пользовательское соглашение.
						</Link>
					</label>
				</div>

				<button
					onClick={handleSubmit}
					className={`w-full py-3 rounded-lg text-white text-lg font-semibold transition ${
						agree && phone.length >= 9
							? 'bg-sky-600 hover:bg-sky-700'
							: 'bg-gray-400 cursor-not-allowed'
					}`}
					disabled={!agree || phone.length < 9}
				>
					Авторизоваться
				</button>
			</div>
		</div>
	)
}
