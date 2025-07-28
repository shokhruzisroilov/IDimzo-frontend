import React from 'react'
import {
	FaInstagram,
	FaTelegramPlane,
	FaYoutube,
	FaFacebookF,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-slate-50 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-4'>
			<p className='text-center md:text-left'>
				© «ID-imzo», 2025 - 2026. Barcha huquqlar himoyalangan.
			</p>

			<div className='flex gap-4'>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-pink-500 hover:text-pink-600 transition'
				>
					<FaInstagram size={20} />
				</a>
				<a
					href='https://t.me/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-sky-500 hover:text-sky-600 transition'
				>
					<FaTelegramPlane size={20} />
				</a>
				<a
					href='https://www.youtube.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-red-600 hover:text-red-700 transition'
				>
					<FaYoutube size={20} />
				</a>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-600 hover:text-blue-700 transition'
				>
					<FaFacebookF size={20} />
				</a>
			</div>
		</footer>
	)
}

export default Footer
