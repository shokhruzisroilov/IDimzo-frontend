import AOSWrapper from '@/components/public/common/AOSWrapper'
import Navbar from '@/components/public/common/Navbar'
import Footer from '@/components/public/common/Footer'

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<AOSWrapper>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</AOSWrapper>
	)
}
