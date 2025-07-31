'use client'

import { Download, History } from 'lucide-react'

const data = [
	{
		id: 1,
		title: 'Naqd pul shartnomasi',
		startDate: '25.01.2025',
		endDate: '28.01.2028',
		status: 'Tasdiqlangan',
		createdAt: '2025-yil 25-yanvar, 12:28',
	},
	{
		id: 2,
		title: 'Naqd pul shartnomasi',
		startDate: '25.01.2025',
		endDate: '28.01.2028',
		status: 'Tasdiqlangan',
		createdAt: '2025-yil 25-yanvar, 12:28',
	},
	{
		id: 3,
		title: 'Naqd pul shartnomasi',
		startDate: '25.01.2025',
		endDate: '28.01.2028',
		status: 'Tasdiqlangan',
		createdAt: '2025-yil 25-yanvar, 12:28',
	},
	{
		id: 4,
		title: 'Naqd pul shartnomasi',
		startDate: '25.01.2025',
		endDate: '28.01.2028',
		status: 'Tasdiqlangan',
		createdAt: '2025-yil 25-yanvar, 12:28',
	},
	{
		id: 5,
		title: 'Naqd pul shartnomasi',
		startDate: '25.01.2025',
		endDate: '28.01.2028',
		status: 'Tasdiqlangan',
		createdAt: '2025-yil 25-yanvar, 12:28',
	},
]

const Story = () => {
	return (
		<div className='w-full p-4 sm:p-6 bg-white rounded-xl shadow-md'>
			{/* Title + Buttons */}
			<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4'>
				<h1 className='text-xl sm:text-2xl font-semibold text-gray-800'>
					Tarix
				</h1>
				<div className='flex gap-2 sm:gap-3 flex-wrap'>
					<button className='px-4 py-2 text-sm sm:text-base bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'>
						Kirishlar
					</button>
					<button className='px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded-md hover:bg-red-600 transition'>
						Chiqishlar
					</button>
				</div>
			</div>

			{/* Jadval - faqat katta ekranlar uchun */}
			<div className='hidden md:block overflow-x-auto'>
				<table className='w-full table-auto border-collapse text-sm'>
					<thead>
						<tr className='bg-gray-100 text-left text-gray-700 uppercase text-xs'>
							<th className='p-3'>#</th>
							<th className='p-3'>Shartnoma nomi</th>
							<th className='p-3'>Boshlanish sanasi</th>
							<th className='p-3'>Tugash sanasi</th>
							<th className='p-3'>Yuklab olish</th>
							<th className='p-3'>Yaratilgan sana</th>
						</tr>
					</thead>
					<tbody className='text-gray-800'>
						{data.map((item, index) => (
							<tr key={item.id} className='border-b hover:bg-gray-50'>
								<td className='p-3'>{index + 1}</td>
								<td className='p-3 flex items-center gap-2'>
									<History className='text-blue-500 w-5 h-5' />
									{item.title}
								</td>
								<td className='p-3'>{item.startDate}</td>
								<td className='p-3'>{item.endDate}</td>
								<td className='p-3'>
									<button className='hover:text-blue-600 transition'>
										<Download className='w-5 h-5' />
									</button>
								</td>
								<td className='p-3'>
									<span className='inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full mb-1'>
										{item.status}
									</span>
									<p className='text-xs text-gray-500'>{item.createdAt}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Card view - faqat mobil ekranlar uchun */}
			<div className='block md:hidden space-y-4'>
				{data.map(item => (
					<div
						key={item.id}
						className='border border-gray-200 rounded-lg p-4 shadow-sm'
					>
						<div className='flex items-center gap-2 mb-2'>
							<History className='text-blue-500 w-5 h-5' />
							<h2 className='font-semibold text-gray-800 text-base'>
								{item.title}
							</h2>
						</div>
						<p className='text-sm text-gray-600'>
							<strong>Boshlanish:</strong> {item.startDate}
						</p>
						<p className='text-sm text-gray-600'>
							<strong>Tugash:</strong> {item.endDate}
						</p>
						<p className='text-sm text-gray-600'>
							<strong>Yaratilgan:</strong> {item.createdAt}
						</p>
						<p className='text-sm text-green-700 mt-1'>
							<strong>Holat:</strong>{' '}
							<span className='bg-green-100 px-2 py-1 rounded text-xs'>
								{item.status}
							</span>
						</p>
						<div className='mt-3'>
							<button className='text-blue-600 flex items-center gap-1 text-sm hover:underline'>
								<Download className='w-4 h-4' />
								Yuklab olish
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Story
