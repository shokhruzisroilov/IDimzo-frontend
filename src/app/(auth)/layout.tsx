import Footer from '@/components/auth/Footer'
import Navbar from '@/components/auth/Navbar'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen flex flex-col overflow-hidden'>
			<Navbar />
			<main className='flex-1 w-full overflow-hidden'>{children}</main>
			<Footer />
		</div>
	)
}
