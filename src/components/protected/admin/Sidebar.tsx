'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import {
	House,
	FileText,
	History,
	User,
	ChevronRight,
	ChevronDown,
} from 'lucide-react'

export default function Sidebar() {
	const pathname = usePathname()
	const [isProfileOpen, setIsProfileOpen] = useState(false)

	const navItems = [
		{ href: '/admin', label: 'Dashboard', exact: true, icon: House },
		{ href: '/admin/documents', label: 'Documents', icon: FileText },
		{ href: '/admin/story', label: 'History', icon: History },
	]

	const profileSubItems = [
		{ href: '/admin/profile/info', label: 'My Info' },
		{ href: '/admin/profile/settings', label: 'Settings' },
	]

	return (
		<aside className='hidden lg:block min-h-screen w-64 bg-gray-100 py-10 px-5'>
			<ul className='space-y-2'>
				{navItems.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={`flex items-center justify-between p-2 rounded transition ${
								item.exact
									? pathname === item.href
										? 'bg-blue-500 text-white'
										: 'hover:bg-gray-200'
									: pathname.startsWith(item.href)
									? 'bg-blue-500 text-white'
									: 'hover:bg-gray-200'
							}`}
						>
							<span className='flex items-center space-x-2'>
								<item.icon className='w-5 h-5' />
								<span>{item.label}</span>
							</span>
							<ChevronRight className='w-5 h-5' />
						</Link>
					</li>
				))}

				<li>
					<button
						onClick={() => setIsProfileOpen(!isProfileOpen)}
						className={`w-full flex items-center justify-between p-2 rounded transition ${
							pathname.startsWith('/admin/profile')
								? 'bg-blue-500 text-white'
								: 'hover:bg-gray-200 text-gray-700'
						}`}
					>
						<span className='flex items-center space-x-2'>
							<User className='w-5 h-5' />
							<span>Profile</span>
						</span>
						{isProfileOpen ? (
							<ChevronDown className='w-5 h-5' />
						) : (
							<ChevronRight className='w-5 h-5' />
						)}
					</button>
					{isProfileOpen && (
						<ul className='ml-8 mt-1 space-y-1'>
							{profileSubItems.map(sub => (
								<li key={sub.href}>
									<Link
										href={sub.href}
										className={`block p-2 rounded text-sm transition ${
											pathname === sub.href
												? 'bg-primary text-white'
												: 'hover:bg-primary hover:text-white'
										}`}
									>
										{sub.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>
			</ul>
		</aside>
	)
}
