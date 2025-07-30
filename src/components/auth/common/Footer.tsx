'use client'

import React from 'react'
import { FaInstagram, FaTelegram, FaYoutube, FaFacebook } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-slate-50 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-4'>
			<p className='text-center md:text-left'>
				© «ID-imzo», 2025 - 2026 Barcha huquqlar himoyalangan.
			</p>

			<div className='flex gap-4 text-lg'>
				<a
					href='https://instagram.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Instagram'
					className='text-[#E1306C] hover:opacity-75 transition'
				>
					<FaInstagram />
				</a>
				<a
					href='https://t.me'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Telegram'
					className='text-[#0088cc] hover:opacity-75 transition'
				>
					<FaTelegram />
				</a>
				<a
					href='https://youtube.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='YouTube'
					className='text-[#FF0000] hover:opacity-75 transition'
				>
					<FaYoutube />
				</a>
				<a
					href='https://facebook.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Facebook'
					className='text-[#1877F2] hover:opacity-75 transition'
				>
					<FaFacebook />
				</a>
			</div>
		</footer>
	)
}

export default Footer
