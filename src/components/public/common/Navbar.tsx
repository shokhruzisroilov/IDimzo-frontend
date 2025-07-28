'use client'

import Image from 'next/image'
import Logo from '../../../assets/icons/logo.png'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<nav className='w-full px-4 bg-white shadow-sm sticky top-0 z-50'>
			<div className='max-w-[1340px] mx-auto py-4 flex justify-between items-center'>
				{/* Logo */}
				<Link href={'/'}>
					<Image
						src={Logo}
						alt='Logo'
						width={160}
						height={40}
						className='object-contain'
					/>
				</Link>

				{/* Desktop Menu */}
				<ul className='hidden lg:flex gap-8 text-gray-700 font-medium whitespace-nowrap'>
					<li>
						<a href='#' className='hover:text-primary text-primary transition'>
							Bosh sahifa
						</a>
					</li>
					<li>
						<a href='#about' className='hover:text-primary transition'>
							Biz haqimizda
						</a>
					</li>
					<li>
						<a href='#news' className='hover:text-primary transition'>
							Yangiliklar
						</a>
					</li>
					<li>
						<a href='#contact' className='hover:text-primary transition'>
							Biz bilan bog’lanish
						</a>
					</li>
				</ul>

				{/* Mobile Hamburger */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='lg:hidden focus:outline-none'
				>
					{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Language & User (Desktop) */}
				<div className='hidden lg:flex items-center gap-4'>
					<select className='border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none'>
						<option>UZ</option>
						<option>EN</option>
						<option>RU</option>
					</select>

					<button className='flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm rounded-md transition'>
						<User size={18} />
						<span>Shaxsiy kabinet</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
					isMobileMenuOpen
						? 'max-h-[500px] opacity-100 scale-100 pb-4'
						: 'max-h-0 opacity-0 scale-95'
				}`}
			>
				<ul className='flex flex-col gap-3 text-gray-700 font-medium pt-2'>
					<li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<a href='#' className='hover:text-primary'>
							Bosh sahifa
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<a href='#about' className='hover:text-primary'>
							Biz haqimizda
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<a href='#news' className='hover:text-primary'>
							Yangiliklar
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<a href='#contact' className='hover:text-primary'>
							Biz bilan bog’lanish
						</a>
					</li>
				</ul>

				<div className='flex flex-col gap-3 mt-4'>
					<select className='border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none'>
						<option>UZ</option>
						<option>EN</option>
						<option>RU</option>
					</select>

					<button className='flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm rounded-md transition'>
						<User size={18} />
						<span>Shaxsiy kabinet</span>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
