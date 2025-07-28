import React from 'react'
import Image from 'next/image'

import phone1 from '../../../assets/images/phone1.png'
import secureIcon from '../../../assets/icons/secure.png'
import googlePlay from '../../../assets/icons/googleplay.png'
import apple from '../../../assets/icons/apple.png'

const Header = () => {
	return (
		<div className='bg-slate-100 w-full flex items-center px-4 md:px-[10%] pt-20 md:pt-[150px] overflow-hidden'>
			<div className='max-w-[1340px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 w-full'>
				{/* Left Side */}
				<div className='w-full lg:w-1/2 max-w-[645px]' data-aos='fade-right'>
					<div className='flex items-center gap-2 text-primary mb-3'>
						<Image
							src={secureIcon}
							alt='Secure'
							width={18}
							height={18}
							className='object-contain'
						/>
						<p className='text-sm md:text-base'>100% Xavfsiz</p>
					</div>

					<h1 className='text-4xl md:text-5xl lg:text-[64px] font-medium leading-tight mb-4'>
						Notarial <br /> harakatlarni <br /> amalga oshiring!
					</h1>

					<p className='text-secondary text-sm md:text-base mb-6 leading-relaxed'>
						Notarial idoralar (notariat) tomonidan huquqiy{' '}
						<br className='hidden md:block' />
						harakatlarni tasdiqdash, shahodatlash va hujjat berish{' '}
						<br className='hidden md:block' />
						borasida amalga oshiriladigan ishlar.
					</p>

					{/* Download Buttons */}
					<div
						className='flex flex-wrap gap-4'
						data-aos='fade-right'
						data-aos-delay='300'
					>
						{/* Google Play */}
						<div className='flex flex-col items-start'>
							<button className='h-[55px] flex items-center gap-2 bg-black text-white py-3 px-5 rounded-md hover:bg-gray-900 transition'>
								<Image
									src={googlePlay}
									alt='Google Play'
									width={22}
									height={22}
									className='object-contain'
								/>
								<span>Google Play</span>
							</button>
							{/* Rating */}
							<div className='flex items-center mt-2'>
								<span className='text-yellow-400 text-lg'>★★★★★</span>
								<span className='ml-2 text-gray-600'>(4.9)</span>
							</div>
						</div>

						{/* Apple Store */}
						<div className='flex flex-col items-start'>
							<button className='h-[55px] flex items-center gap-2 bg-black text-white py-3 px-5 rounded-md hover:bg-gray-900 transition'>
								<Image
									src={apple}
									alt='Apple Store'
									width={22}
									height={22}
									className='object-contain'
								/>
								<span className='text-left flex flex-col'>
									<span className='text-xs'>Available on the</span>
									<span className='text-sm font-medium -mt-[2px]'>
										Apple Store
									</span>
								</span>
							</button>
							{/* Rating */}
							<div className='flex items-center mt-2'>
								<span className='text-yellow-400 text-lg'>
									★★★★<span className='text-gray-300'>★</span>
								</span>
								<span className='ml-2 text-gray-600'>(4.5)</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side - Image */}
				<div
					className='w-full lg:w-1/2 flex justify-center'
					data-aos='fade-left'
				>
					<Image
						src={phone1}
						alt='Phone'
						width={800}
						height={800}
						className='md:object-contain max-md:w-full max-md:max-w-[400px]'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
