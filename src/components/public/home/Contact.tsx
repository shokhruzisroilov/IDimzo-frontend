import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
	return (
		<section className='py-16 px-4 bg-white'>
			<div className='max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
				{/* Left - Contact Info */}
				<div data-aos='fade-right'>
					<h2 className='text-3xl font-semibold text-gray-800 mb-4'>
						Biz bilan bog&apos;lanish
					</h2>
					<p className='text-gray-600 mb-8 max-w-md'>
						Savollar, shikoyatlar yoki takliflar? Shaklni to‘ldiring va biz tez
						orada bog‘lanamiz.
					</p>
					<ul className='space-y-5 text-gray-700 text-sm'>
						<li className='flex items-center gap-3'>
							<FaMapMarkerAlt className='text-blue-600' />
							<span>Toshkent sh.</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaPhoneAlt className='text-blue-600' />
							<span>+998 71 200 29 00</span>
						</li>
						<li className='flex items-center gap-3'>
							<FaEnvelope className='text-blue-600' />
							<span>idimzo@gmail.com</span>
						</li>
					</ul>
				</div>

				{/* Right - Contact Form */}
				<div
					className='bg-white border border-gray-200 shadow-sm rounded-lg p-6'
					data-aos='fade-left'
				>
					<form className='space-y-4'>
						<input
							type='text'
							placeholder='Ismingiz*'
							required
							className='w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='tel'
							placeholder='Telefon raqami*'
							required
							className='w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<input
							type='text'
							placeholder='Kompaniya'
							className='w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<textarea
							placeholder='Xabaringiz...'
							rows={4}
							className='w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
						></textarea>
						<button
							type='submit'
							className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition'
						>
							Xabar yuborish
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
