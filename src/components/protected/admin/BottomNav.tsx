'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home, FileText, History, User, Phone } from 'lucide-react'

const navItems = [
	{ href: '/admin', icon: Home },
	{ href: '/admin/documents', icon: FileText },
	{ href: '/admin/story', icon: History },
	{ href: '/admin/profile/info', icon: User },
]

export default function BottomNav() {
	const pathname = usePathname()
	const [isAtFooter, setIsAtFooter] = useState(false)
	const [isProfileOpen, setIsProfileOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight
			const documentHeight = document.body.offsetHeight

			if (documentHeight - scrollPosition < 100) {
				setIsAtFooter(true)
			} else {
				setIsAtFooter(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const bottomClass = isAtFooter ? 'bottom-32' : 'bottom-10'

	return (
		<div
			className={`lg:hidden fixed ${bottomClass} left-4 right-4 z-50 flex items-center justify-center gap-4 transition-all duration-300`}
		>
			<div className='flex items-center gap-8 px-4 py-[10px] bg-[#F6FBFF] border-t border-gray-200 rounded-[44px]'>
				{navItems.map(item => {
					const isActive = pathname === item.href

					// Maxsus: Agar bu User icon bo‘lsa, dropdown ko‘rsatamiz
					if (item.href === '/admin/profile/info') {
						return (
							<div key='profile-dropdown' className='relative'>
								<button
									onClick={() => setIsProfileOpen(prev => !prev)}
									className={`flex items-center justify-center w-12 h-12 rounded-full transition ${
										isActive || pathname.startsWith('/admin/profile')
											? 'bg-[#111827] text-white'
											: 'text-gray-500'
									}`}
								>
									<User className='w-5 h-5' />
								</button>

								{/* Dropdown menyu */}
								{isProfileOpen && (
									<div className='absolute bottom-14 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-2 space-y-1 z-50'>
										<Link
											href='/admin/profile/info'
											onClick={() => setIsProfileOpen(false)}
											className={`block px-4 py-2 rounded ${
												pathname === '/admin/profile/info'
													? 'bg-blue-100 text-blue-700'
													: 'hover:bg-gray-100'
											}`}
										>
											Personal Information
										</Link>
										<Link
											href='/admin/profile/payment-info'
											onClick={() => setIsProfileOpen(false)}
											className={`block px-4 py-2 rounded ${
												pathname === '/admin/profile/payment-info'
													? 'bg-blue-100 text-blue-700'
													: 'hover:bg-gray-100'
											}`}
										>
											Balance History
										</Link>
									</div>
								)}
							</div>
						)
					}

					return (
						<Link key={item.href} href={item.href}>
							<div
								className={`flex items-center justify-center w-12 h-12 rounded-full transition ${
									isActive ? 'bg-[#111827] text-white' : 'text-gray-500'
								}`}
							>
								<item.icon className='w-5 h-5' />
							</div>
						</Link>
					)
				})}
			</div>
			<a href='tel:+998900000000'>
				<div className='p-[10px] bg-[#F0F8FF78] border-t border-gray-200 rounded-[44px]'>
					<div className='flex items-center justify-center w-12 h-12 rounded-full transition bg-[#111827] text-white'>
						<Phone className='w-5 h-5' />
					</div>
				</div>
			</a>
		</div>
	)
}
