import Header from '@/components/public/home/Header'
import Function from '@/components/public/home/Function'
import About from '@/components/public/home/About'
import Statistic from '@/components/public/home/Statistic'
import Interface from '@/components/public/home/Interface'
import Contact from '@/components/public/home/Contact'

export default function HomePage() {
	return (
		<div className='overflow-x-hidden'>
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
		</div>
	)
}
