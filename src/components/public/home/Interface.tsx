import Image from 'next/image'
import React from 'react'
import phone3 from '../../../assets/images/phone3.png'

const Interface = () => {
	return (
		<div
			className='w-full px-4 md:px-10 lg:px-[10%] py-10 bg-white flex flex-col items-center'
			data-aos='fade-up'
			data-aos-delay='100'
		>
			<h1
				className='text-2xl md:text-4xl font-semibold text-primary mb-6 text-center'
				data-aos='fade-down'
				data-aos-delay='200'
			>
				Ilova interfeysi
			</h1>
			<div
				className='w-full flex justify-center'
				data-aos='zoom-in'
				data-aos-delay='300'
			>
				<Image
					src={phone3}
					alt='Image'
					className='object-contain w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px]'
				/>
			</div>
		</div>
	)
}

export default Interface
