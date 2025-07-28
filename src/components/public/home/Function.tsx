import Image from 'next/image'
import React from 'react'
import phone2 from '../../../assets/images/phone2.png'
import icon1 from '../../../assets/icons/icon1.png'
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'
import icon4 from '../../../assets/icons/icon4.png'

const Function = () => {
	return (
		<div className='bg-white w-full px-4 md:px-10 lg:px-[10%] py-10'>
			<div className='max-w-[1340px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>
				{/* Left: Phone Image */}
				<div
					className='flex justify-center w-full lg:w-1/2'
					data-aos='zoom-in'
					data-aos-delay='200'
				>
					<Image
						src={phone2}
						alt='Phone'
						width={400}
						height={600}
						className='object-contain w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]'
					/>
				</div>

				{/* Right: Features */}
				<div
					className='w-full lg:w-1/2 mt-6 lg:mt-0'
					data-aos='fade-left'
					data-aos-delay='300'
				>
					<h2 className='text-primary text-base md:text-lg mb-2'>
						Ajoyib xususiyatlar
					</h2>
					<h1 className='text-3xl md:text-4xl font-semibold mb-8'>
						O&apos;ziga xos funksiyalar
					</h1>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						{/* Card 1 */}
						<div
							className='p-4 rounded-md shadow-sm hover:shadow-md transition bg-slate-50'
							data-aos='fade-up'
							data-aos-delay='100'
						>
							<div className='w-[60px] h-[60px] bg-primary flex justify-center items-center rounded-sm mb-4'>
								<Image src={icon1} alt='Icon 1' width={30} height={30} />
							</div>
							<h3 className='font-bold mb-2'>Tezkor xizmat</h3>
							<p className='text-secondary text-sm leading-relaxed'>
								Tez va ishonchli xizmatlar orqali mijozlar ehtiyojini qondirish
								imkoniyati.
							</p>
						</div>

						{/* Card 2 */}
						<div
							className='p-4 rounded-md shadow-sm hover:shadow-md transition bg-slate-50'
							data-aos='fade-up'
							data-aos-delay='200'
						>
							<div className='w-[60px] h-[60px] bg-green-400 flex justify-center items-center rounded-sm mb-4'>
								<Image src={icon2} alt='Icon 2' width={30} height={30} />
							</div>
							<h3 className='font-bold mb-2'>Online ariza</h3>
							<p className='text-secondary text-sm leading-relaxed'>
								Hujjatlarni elektron shaklda yuborish imkoniyati bilan qulay
								foydalanish.
							</p>
						</div>

						{/* Card 3 */}
						<div
							className='p-4 rounded-md shadow-sm hover:shadow-md transition bg-slate-50'
							data-aos='fade-up'
							data-aos-delay='300'
						>
							<div className='w-[60px] h-[60px] bg-orange-500 flex justify-center items-center rounded-sm mb-4'>
								<Image src={icon3} alt='Icon 3' width={30} height={30} />
							</div>
							<h3 className='font-bold mb-2'>Maxfiylik</h3>
							<p className='text-secondary text-sm leading-relaxed'>
								Foydalanuvchi maʼlumotlari toʻliq himoyalangan va xavfsiz.
							</p>
						</div>

						{/* Card 4 */}
						<div
							className='p-4 rounded-md shadow-sm hover:shadow-md transition bg-slate-50'
							data-aos='fade-up'
							data-aos-delay='400'
						>
							<div className='w-[60px] h-[60px] bg-purple-600 flex justify-center items-center rounded-sm mb-4'>
								<Image src={icon4} alt='Icon 4' width={30} height={30} />
							</div>
							<h3 className='font-bold mb-2'>Doimiy qoʻllab-quvvatlash</h3>
							<p className='text-secondary text-sm leading-relaxed'>
								Har qanday muammo yuzaga kelganda tezkor yordam ko‘rsatish
								xizmati.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Function
