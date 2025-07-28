import React from 'react'
import Statictic from '../../../assets/images/statictics.png'
import Image from 'next/image'

const Statistic = () => {
	return (
		<section className=' px-4 py-14 overflow-hidden'>
			<div className='max-w-[1340px] mx-auto flex flex-col-reverse md:flex-row items-start gap-10 md:gap-20'>
				{/* Rasm qismi */}
				<div
					className='w-full md:w-1/2 flex justify-center min-w-0'
					data-aos='fade-left'
					data-aos-delay='200'
				>
					<Image
						src={Statictic}
						alt='Statictics'
						className='object-contain w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-auto'
					/>
				</div>

				{/* Matn qismi */}
				<div
					className='w-full md:w-1/2 text-start md:text-left'
					data-aos='fade-right'
					data-aos-delay='100'
				>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold my-4'>
						Roʻyxatdan oʻtish sodda va <br className='hidden sm:block' />
						foydalanish juda oson
					</h2>
					<p className='text-secondary text-sm sm:text-base leading-relaxed'>
						Biz mijozlar tajribasi bilan yirik va kichik biznes uchun brend,
						kampaniyalar va raqamli loyihalarni ishlab chiqamiz va quramiz.
						Tartiblar uchun to‘ldiruvchi matn sifatida keng qo‘llanilishi
						tufayli o‘qilmasligi inson idrokida katta ahamiyatga ega.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Statistic
