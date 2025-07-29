'use client'

import { ReactNode } from 'react'
import BottomNav from '@/components/protected/admin/BottomNav'
import Sidebar from '@/components/protected/admin/Sidebar'

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='flex-1 flex lg:flex-row'>
				<Sidebar />
				<div className='flex-1'>
					<main className='p-4 pb-32'>{children}</main> <BottomNav />
				</div>
			</div>
		</div>
	)
}
