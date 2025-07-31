import React from 'react'
import { Search } from 'lucide-react'

const Documents = () => {
	const tugmalar = [
		'Moliyaviy kelishuvlar',
		'Ko‘chmas mulkka oid shartnomalar',
		'Avtotransportlarga oid shartnomalar',
		'Mahsulot sotish yoki xizmat ko‘rsatish shartnomalari',
		'Boshqa turdagi shartnomalar',
		'Kelishuvlar',
		'Bitimlar',
		'Ishonchnomalar',
	]

	return (
		<div className='p-4 sm:p-6 bg-white rounded-xl'>
			{/* Qidiruv va til tanlash */}
			<div className='flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6'>
				{/* Qidiruv oynasi */}
				<div className='relative w-full md:w-1/2'>
					<input
						type='search'
						placeholder='Hujjat nomini qidiring...'
						className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'
					/>
					<Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none' />
				</div>

				{/* Til tanlash */}
				<div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full md:w-auto'>
					<span className='text-gray-700 font-medium'>Hujjat tili:</span>
					<select className='w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'>
						<option value='UZ'>{`O'zbekcha`}</option>
						<option value='EN'>Inglizcha</option>
						<option value='RU'>Ruscha</option>
					</select>
				</div>
			</div>

			{/* Tugmalar ro‘yxati */}
			<div className='grid grid-cols-1 gap-3'>
				{tugmalar.map((matn, index) => (
					<button
						key={index}
						className='w-full text-left bg-blue-100 hover:bg-blue-600 hover:text-white
						text-blue-900 font-medium border border-blue-300 rounded-lg p-4 transition duration-200 text-sm sm:text-base'
					>
						{matn}
					</button>
				))}
			</div>
		</div>
	)
}

export default Documents
