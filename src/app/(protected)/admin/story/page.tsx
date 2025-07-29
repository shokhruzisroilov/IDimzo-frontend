'use client'

import { Download, History } from 'lucide-react'
import React from 'react'

const Story = () => {
	return (
		<div className='w-full p-6 bg-white rounded-xl shadow-md'>
			{/* Sarlavha */}
			<div className='flex justify-between items-center mb-6 flex-wrap gap-3'>
				<h1 className='text-2xl font-semibold text-gray-800'>Tarix</h1>
				<div className='flex gap-3 flex-wrap'>
					<button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>
						Kirishlar
					</button>
					<button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition'>
						Chiqishlar
					</button>
				</div>
			</div>

			{/* Jadval */}
			<div className='w-full min-w-[800px]'>
				<table className='w-full table-auto border-collapse text-sm'>
					<thead>
						<tr className='bg-gray-100 text-left text-gray-700 uppercase'>
							<th className='p-3'>#</th>
							<th className='p-3'>Shartnoma nomi</th>
							<th className='p-3'>Boshlanish sanasi</th>
							<th className='p-3'>Tugash sanasi</th>
							<th className='p-3'>Yuklab olish</th>
							<th className='p-3'>Yaratilgan sana</th>
						</tr>
					</thead>
					<tbody className='text-gray-800'>
						{[1, 2, 3, 4].map((item, index) => (
							<tr key={index} className='border-b hover:bg-gray-50'>
								<td className='p-3'>{index + 1}</td>
								<td className='p-3 flex items-center gap-2'>
									<History className='text-blue-500 w-5 h-5' />
									<span>Naqd pul shartnomasi</span>
								</td>
								<td className='p-3'>25.01.2025</td>
								<td className='p-3'>28.01.2028</td>
								<td className='p-3'>
									<button className='hover:text-blue-600 transition'>
										<Download className='w-5 h-5' />
									</button>
								</td>
								<td className='p-3'>
									<span className='inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full mb-1'>
										Tasdiqlangan
									</span>
									<p className='text-xs text-gray-500'>
										2025-yil 25-yanvar, 12:28
									</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Story
