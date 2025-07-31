const InfoSkeleton = () => {
	return (
		<div className='w-full flex flex-col lg:flex-row gap-10 animate-pulse'>
			<div className='w-full bg-slate-100 rounded-[10px] p-6 flex flex-col sm:flex-row gap-12'>
				{/* Avatar */}
				<div className='flex flex-col items-center sm:items-start'>
					<span className='mt-2 w-16 h-4 bg-gray-300 rounded'></span>
					<div className='w-36 h-36 bg-gray-300 rounded-full mt-5'></div>
				</div>

				{/* Ma'lumotlar */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 flex-1'>
					{Array.from({ length: 4 }).map((_, i) => (
						<div key={i}>
							<div className='w-24 h-4 bg-gray-300 rounded mb-2'></div>
							<div className='w-40 h-5 bg-gray-400 rounded'></div>
						</div>
					))}
				</div>
			</div>

			{/* Call markazi */}
			<div className='w-full sm:w-80 bg-slate-100 rounded-[10px] p-4 space-y-4'>
				<div className='w-40 h-6 bg-gray-300 rounded'></div>
				<div className='flex items-center gap-2'>
					<div className='w-5 h-5 border-2 border-sky-500 rounded-full'></div>
					<div className='w-32 h-5 bg-gray-300 rounded'></div>
				</div>
				<div className='flex items-center gap-2'>
					<div className='w-5 h-5 border-2 border-sky-500 rounded-full'></div>
					<div className='w-32 h-5 bg-gray-300 rounded'></div>
				</div>
			</div>
		</div>
	)
}

export default InfoSkeleton
