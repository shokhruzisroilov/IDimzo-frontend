'use client'

import Image from 'next/image'
import Logo from '../../../assets/icons/logo.png'
import { User, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const router = useRouter()

	const handleRedirect = () => {
		const token =
			typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
		if (token) {
			router.push('/admin')
		} else {
			router.push('/login')
		}
	}

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

				{/* Language & User (Desktop) */}
				<div className='hidden lg:flex items-center gap-4'>
					<select className='border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none'>
						<option>UZ</option>
						<option>EN</option>
						<option>RU</option>
					</select>

					<button
						onClick={handleRedirect}
						className='flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm rounded-md transition'
					>
						<User size={18} />
						<span>Shaxsiy kabinet</span>
					</button>
				</div>

				{/* Toggle button for mobile */}
				<div className='lg:hidden'>
					<button
						onClick={() => setIsMobileMenuOpen(prev => !prev)}
						className='text-gray-700 focus:outline-none'
						aria-label='Toggle Menu'
					>
						{isMobileMenuOpen ? (
							<X size={24} />
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
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
					<li onClick={() => setIsMobileMenuOpen(false)}>
						<a href='#' className='hover:text-primary'>
							Bosh sahifa
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(false)}>
						<a href='#about' className='hover:text-primary'>
							Biz haqimizda
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(false)}>
						<a href='#news' className='hover:text-primary'>
							Yangiliklar
						</a>
					</li>
					<li onClick={() => setIsMobileMenuOpen(false)}>
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

					<button
						onClick={handleRedirect}
						className='flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white text-sm rounded-md transition'
					>
						<User size={18} />
						<span>Shaxsiy kabinet</span>
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
