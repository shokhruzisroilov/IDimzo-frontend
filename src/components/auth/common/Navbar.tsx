import React from 'react'
import { PhoneIcon } from 'lucide-react'
import logo from '@/assets/icons/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<header className='w-full bg-slate-50 px-6 md:px-10 py-4 flex justify-between items-center shadow-sm'>
			{/* Logo */}
			<Link href='/' className='w-36 md:w-40'>
				<Image src={logo} alt='logo' />
			</Link>

			{/* Contact & Lang */}
			<div className='flex items-center gap-4 md:gap-6 text-gray-800'>
				{/* Only icon on mobile, full number on desktop */}
				<a
					href='tel:+998712002900'
					className='flex items-center gap-2 text-sm md:text-lg font-medium'
				>
					{/* Show only icon on mobile */}
					<PhoneIcon className='text-[#008AFF] block md:hidden' size={24} />

					{/* Show number on desktop */}
					<>
						<PhoneIcon className='text-[#008AFF] hidden md:block' size={20} />
						<span className='hidden md:inline'>+998 71 200 29 00</span>
					</>
				</a>

				{/* Language Selector */}
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
