'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
			<h1 className='text-6xl font-bold text-blue-600 mb-4'>404</h1>
			<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
				Sahifa topilmadi
			</h2>
			<p className='text-gray-600 mb-6 text-center'>
				Kechirasiz, siz izlagan sahifa mavjud emas yoki ko‘chirilgan bo‘lishi
				mumkin.
			</p>

			<div className='flex gap-4'>
				<button
					onClick={() => router.back()}
					className='px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition'
				>
					Ortga qaytish
				</button>

				<Link
					href='/'
					className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition'
				>
					Bosh sahifaga qaytish
				</Link>
			</div>
		</div>
	)
}
