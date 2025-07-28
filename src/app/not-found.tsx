'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
	const router = useRouter()

	return (
		<div className='flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-100'>
			<h1 className='text-4xl font-bold mb-4 text-red-500'>
				404 - Sahifa topilmadi
			</h1>
			<p className='text-lg mb-6'>
				Kechirasiz, siz izlagan sahifa mavjud emas.
			</p>

			<div className='flex gap-4'>
				<button
					onClick={() => router.back()}
					className='bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition duration-300'
				>
					Orqaga qaytish
				</button>
				<button
					onClick={() => router.push('/')}
					className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition duration-300'
				>
					Bosh sahifaga qaytish
				</button>
			</div>
		</div>
	)
}

export default NotFound
