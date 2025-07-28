import Header from '@/components/public/home/Header'
import Navbar from '@/components/public/common/Navbar'
import Function from '@/components/public/home/Function'
import About from '@/components/public/home/About'
import Statistic from '@/components/public/home/Statistic'
import Footer from '@/components/public/common/Footer'
import Interface from '@/components/public/home/Interface'
import Contact from '@/components/public/home/Contact'

export default function HomePage() {
	return (
		<div className='overflow-hidden'>
			<Navbar />
			<section>
				<Header />
			</section>
			<section id='about'>
				<About />
			</section>
			<section id='news'>
				<Function />
			</section>
			<section id='contact'>
				<Contact />
			</section>
			<Interface />
			<Statistic />
			<Footer />
		</div>
	)
}
