import Footer from '@/components/auth/Footer'
import Navbar from '@/components/auth/Navbar'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='w-full min-h-screen flex flex-col justify-between items-center'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
