'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../assets/icons/logo.png'
import googlePlay from '../../../assets/icons/googleplay.png'
import apple from '../../../assets/icons/apple.png'
import {
	FaInstagram,
	FaTelegram,
	FaYoutube,
	FaFacebook,
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-gray-50 pt-12 pb-6'>
			<div className='max-w-[1340px] mx-auto px-4'>
				{/* Grid Layout */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
					{/* Logo & App Buttons */}
					<div data-aos='fade-up' data-aos-delay='100'>
						<Image src={logo} alt='ID-imzo logo' width={120} height={60} />
						<p className='my-4 text-gray-600 text-sm'>
							Quyidagi havolani bosish orqali ilovani yuklab oling:
						</p>
						<div
							className='flex flex-wrap gap-4'
							data-aos='fade-right'
							data-aos-delay='300'
						>
							{/* Google Play */}
							<div className='flex flex-col items-start'>
								<button className='h-[55px] flex items-center gap-2 bg-black text-white py-3 px-5 rounded-md hover:bg-gray-900 transition'>
									<Image
										src={googlePlay}
										alt='Google Play'
										width={22}
										height={22}
										className='object-contain'
									/>
									<span>Google Play</span>
								</button>
							</div>

							{/* Apple Store */}
							<div className='flex flex-col items-start'>
								<button className='h-[55px] flex items-center gap-2 bg-black text-white py-3 px-5 rounded-md hover:bg-gray-900 transition'>
									<Image
										src={apple}
										alt='Apple Store'
										width={22}
										height={22}
										className='object-contain'
									/>
									<span className='text-left flex flex-col'>
										<span className='text-xs'>Available on the</span>
										<span className='text-sm font-medium -mt-[2px]'>
											Apple Store
										</span>
									</span>
								</button>
							</div>
						</div>
					</div>

					{/* Pages */}
					<div data-aos='fade-up' data-aos-delay='200'>
						<h3 className='text-lg font-semibold mb-4 text-gray-800'>
							Sahifalar
						</h3>
						<ul className='space-y-2 text-sm'>
							{[
								'Asosiy',
								'Biz haqimizda',
								'Yangiliklar',
								'Bog&apos;lanish',
							].map((item, i) => (
								<li key={i}>
									<a
										href='#'
										className='text-gray-600 hover:text-blue-500 transition'
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div data-aos='fade-up' data-aos-delay='300'>
						<h3 className='text-lg font-semibold mb-4 text-gray-800'>Aloqa</h3>
						<ul className='space-y-3 text-sm text-gray-600'>
							<li className='flex items-center gap-2'>
								<FaPhone className='text-blue-500' />
								<span>+998 71 200 29 00</span>
							</li>
							<li className='flex items-center gap-2'>
								<FaEnvelope className='text-blue-500' />
								<span>idimzo@gmail.com</span>
							</li>
							<li className='flex items-center gap-2'>
								<FaMapMarkerAlt className='text-blue-500' />
								<span>Toshkent shahar</span>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div data-aos='fade-up' data-aos-delay='400'>
						<h3 className='text-lg font-semibold mb-4 text-gray-800'>
							Ijtimoiy tarmoqlar
						</h3>
						<div className='flex gap-4 flex-wrap'>
							<a
								href='#'
								className='bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition'
							>
								<FaInstagram size={20} />
							</a>
							<a
								href='#'
								className='bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition'
							>
								<FaTelegram size={20} />
							</a>
							<a
								href='#'
								className='bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition'
							>
								<FaYoutube size={20} />
							</a>
							<a
								href='#'
								className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition'
							>
								<FaFacebook size={20} />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Line */}
				<div
					className='border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500'
					data-aos='fade-up'
					data-aos-delay='500'
				>
					&copy; &quot;ID-imzo&quot;, 2025 - 2026. Barcha huquqlar himoyalangan.
				</div>
			</div>
		</footer>
	)
}

export default Footer
