'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/protected/common/Navbar'
import Loading from './admin/loading'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
	const router = useRouter()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

	useEffect(() => {
		const token = localStorage.getItem('accessToken')

		if (!token) {
			router.replace('/login')
		} else {
			setIsAuthenticated(true)
		}
	}, [])

	// Loading
	if (isAuthenticated === null) return <Loading />

	// If have token view page
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='flex-grow'>{children}</main>
		</div>
	)
}
