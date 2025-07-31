'use client'
import React from 'react'
import { X } from 'lucide-react'

interface NewsModalProps {
	open: boolean
	onClose: () => void
	imageUrl: string
	title: string
}

export default function NewsModal({
	open,
	onClose,
	imageUrl,
	title,
}: NewsModalProps) {
	if (!open) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4'>
			<div className='relative bg-white rounded-lg overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl'>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-3 right-3 text-gray-700 hover:text-black z-10'
					aria-label='Yopish'
				>
					<X className='w-6 h-6' />
				</button>

				{/* Image */}
				<div
					className='w-full h-[300px] sm:h-[400px] bg-center bg-cover'
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>

				{/* Title */}
				<div className='p-4 sm:p-6'>
					<p className='text-center text-gray-800 text-sm sm:text-base'>
						{title}
					</p>
				</div>
			</div>
		</div>
	)
}
