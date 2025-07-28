import React from 'react'
import phone2 from '../../../assets/images/phone2.png'
import Image from 'next/image'
import { CloudDownload, Smile, Star, Users } from 'lucide-react'

const About = () => {
	return (
		<div className='w-full bg-white px-4 md:px-10 lg:px-[10%] py-10'>
			<div className='max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
				{/* Left Text */}
				<div
					className='w-full lg:w-1/2'
					data-aos='fade-right'
					data-aos-delay='100'
				>
					<h2 className='text-primary text-sm md:text-base my-3'>
						Biz haqimizda
					</h2>
					<h1 className='text-2xl md:text-4xl font-semibold mb-6 leading-snug'>
						Xususiy amaliyot bilan shug‘ullanuvchi{' '}
						<br className='hidden md:block' />
						notariuslar amalga oshiradi.
					</h1>

					<div className='space-y-4'>
						{[1, 2, 3].map((_, i) => (
							<div
								key={i}
								className='flex items-start gap-4'
								data-aos='fade-up'
								data-aos-delay={200 + i * 100}
							>
								<div className='w-[60px] h-[60px] bg-white rounded-full shadow-md flex-shrink-0' />
								<div>
									<h3 className='text-xl font-semibold mb-1'>Funksiya</h3>
									<p className='text-xs text-secondary leading-relaxed'>
										Lorem ipsum dolor sit a Captivate your guests with seamless{' '}
										<br className='hidden sm:block' />
										browsing experience across all devices.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Right Image */}
				<div
					className='w-full lg:w-1/2 flex justify-center'
					data-aos='zoom-in'
					data-aos-delay='300'
				>
					<Image
						src={phone2}
						alt='Image'
						width={400}
						height={600}
						className='object-contain w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]'
					/>
				</div>
			</div>

			{/* Stats Section */}
			<div
				className='max-w-[1340px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-20'
				data-aos='fade-up'
				data-aos-delay='400'
			>
				<div className='flex flex-col items-center text-center py-10 border border-gray-100 rounded-md shadow-sm'>
					<Users className='text-primary' size={32} />
					<h1 className='text-3xl font-bold my-2'>47,595</h1>
					<p className='text-secondary text-sm'>Foydalanuvchilar</p>
				</div>
				<div className='flex flex-col items-center text-center py-6 border border-gray-100 rounded-md shadow-sm'>
					<Smile className='text-primary' size={32} />
					<h1 className='text-3xl font-bold my-2'>34,797</h1>
					<p className='text-secondary text-sm'>Baxtli mijozlar</p>
				</div>
				<div className='flex flex-col items-center text-center py-6 border border-gray-100 rounded-md shadow-sm'>
					<Star className='text-primary' size={32} />
					<h1 className='text-3xl font-bold my-2'>895</h1>
					<p className='text-secondary text-sm'>Sharhlar</p>
				</div>
				<div className='flex flex-col items-center text-center py-6 border border-gray-100 rounded-md shadow-sm'>
					<CloudDownload className='text-primary' size={32} />
					<h1 className='text-3xl font-bold my-2'>50,927</h1>
					<p className='text-secondary text-sm'>Ilovani yuklab olish</p>
				</div>
			</div>
		</div>
	)
}

export default About
