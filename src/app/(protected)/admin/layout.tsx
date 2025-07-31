'use client'

import { ReactNode } from 'react'
import BottomNav from '@/components/protected/admin/BottomNav'
import Sidebar from '@/components/protected/admin/Sidebar'

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<div className='w-full flex'>
			<Sidebar />
			<main className='w-[85%] max-lg:w-[100%] p-4 pb-32'>{children}</main>
			<BottomNav />
		</div>
	)
}
