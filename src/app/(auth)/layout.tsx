'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { getItem } from '@/helpers/persistanceStorage'
import Footer from '@/components/auth/Footer'
import Navbar from '@/components/auth/Navbar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter()
	const pathname = usePathname()
	const [isChecking, setIsChecking] = useState(true)

	useEffect(() => {
		const accessToken = getItem<string>('accessToken')
		const isAuthPage = ['/login', '/verify', '/agreement'].includes(pathname)

		if (accessToken && isAuthPage) {
			router.replace('/admin')
		} else {
			setIsChecking(false)
		}
	}, [pathname, router])

	if (isChecking) return null

	return (
		<div className='min-h-screen flex flex-col overflow-hidden'>
			<Navbar />
			<main className='flex-1 w-full overflow-hidden'>{children}</main>
			<Footer />
		</div>
	)
}

export default AuthLayout
