'use client'

export default function Loading() {
	return (
		<div className='h-screen w-full flex items-center justify-center bg-white'>
			<div className='flex flex-col items-center gap-4'>
				<div className='w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
				<p className='text-gray-700 text-lg font-medium'>Yuklanmoqda...</p>
			</div>
		</div>
	)
}
