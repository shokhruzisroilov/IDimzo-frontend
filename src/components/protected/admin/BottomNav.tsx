'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Home, FileText, History, User, Phone } from 'lucide-react'

const navItems = [
	{ href: '/admin', icon: Home },
	{ href: '/admin/documents', icon: FileText },
	{ href: '/admin/story', icon: History },
	{ href: '/admin/profile', icon: User },
]

export default function BottomNav() {
	const pathname = usePathname()
	const [isAtFooter, setIsAtFooter] = useState(false)

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
