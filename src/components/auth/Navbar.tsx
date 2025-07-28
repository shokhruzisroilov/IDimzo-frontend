import React from 'react'
import { PhoneIcon } from 'lucide-react'
import logo from '@/assets/icons/logo.png'
import Image from 'next/image'

const Navbar = () => {
	return (
		<header className='w-full bg-slate-50 px-6 md:px-10 py-4 flex justify-between items-center shadow-sm'>
			{/* Logo */}
			<div className='w-36 md:w-40'>
				<Image src={logo} alt='logo' />
			</div>

			{/* Contact & Lang */}
			<div className='flex items-center gap-4 md:gap-6 text-gray-800'>
				<div className='flex items-center gap-2 text-sm md:text-lg font-medium'>
					<PhoneIcon className='text-[#008AFF]' size={20} />
					<span>+998 71 200 29 00</span>
				</div>
				<select className='border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none'>
					<option>UZ</option>
					<option>EN</option>
					<option>RU</option>
				</select>
			</div>
		</header>
	)
}

export default Navbar
