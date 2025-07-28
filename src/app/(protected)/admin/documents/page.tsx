import React from 'react'
import { Search } from 'lucide-react' // Lucide'dan import qilyapmiz

const Documents = () => {
	const buttons = [
		'Moliyaviy kelishuvlar',
		'Ko‘chmas mulkka oid shartnomalar',
		'Avtotransportlarga oid shartnomalar',
		'Maxsulot sotish, xizmat ko‘rsatish (ishlarni bajarish) shartnomalari',
		'Boshqa turdagi shartnomalar',
		'Kelishuvlar',
		'Bitimlar',
		'Ishonchnomalar',
	]

	return (
		<div className='p-6 bg-white rounded-xl '>
			{/* Top Search & Language Filter */}
			<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
				{/* Search Input with Icon */}
				<div className='relative w-full md:w-1/2'>
					<input
						type='search'
						placeholder='Qidiruv...'
						className='w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none ' />
				</div>

				{/* Language Selector */}
				<div className='flex items-center gap-3'>
					<span className='text-gray-700 font-medium'>Язык документа:</span>
					<select className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
						<option value='UZ'>UZ</option>
						<option value='EN'>EN</option>
						<option value='RU'>RU</option>
					</select>
				</div>
			</div>

			{/* Buttons List */}
			<div className='grid grid-cols-1 gap-3'>
				{buttons.map((text, index) => (
					<button
						key={index}
						className='w-full text-left bg-blue-100 hover:bg-primary hover:text-white
             text-blue-900 font-medium border border-blue-300 rounded-lg p-4 transition duration-200'
					>
						{text}
					</button>
				))}
			</div>
		</div>
	)
}

export default Documents
