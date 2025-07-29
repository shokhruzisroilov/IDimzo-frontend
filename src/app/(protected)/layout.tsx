'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/protected/common/Navbar'
import Loading from './admin/loading'
import { getItem } from '@/helpers/persistanceStorage'
import Footer from '@/components/protected/common/Footer'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
	const router = useRouter()
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

	useEffect(() => {
		const accessToken = getItem<string>('accessToken')

		if (accessToken) {
			setIsAuthenticated(true)
		} else {
			router.replace('/login')
		}
	}, [router])

	if (isAuthenticated === null) return <Loading />

	return (
		<div className='w-full flex flex-col min-h-screen'>
			<Navbar />
			<main className='w-full flex-grow'>{children}</main>
			<Footer />
		</div>
	)
}
