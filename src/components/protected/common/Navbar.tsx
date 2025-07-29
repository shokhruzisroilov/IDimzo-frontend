import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import logo from '@/assets/icons/logo.png'

const Navbar = () => {
	return (
		<nav className='w-full bg-white shadow-md px-6 py-4'>
			<div className='flex justify-between items-center'>
				{/* Logo */}
				<Link href='/admin' className='flex items-center gap-2'>
					<Image src={logo} alt='Logo' className='w-32 h-auto object-contain' />
				</Link>

				{/* Right Side */}
				<div className='flex items-center gap-6'>
					{/* Notification Icon */}
					<div className='relative group cursor-pointer'>
						<IoIosNotifications className='text-blue-600 w-6 h-6 group-hover:scale-110 transition-transform duration-200' />
						<span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full'>
							3
						</span>
					</div>

					{/* Phone Number */}
					<div className='hidden lg:flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200'>
						<FaPhoneAlt className='text-blue-600' />
						<span className='font-medium'>+998 71 200 29 00</span>
					</div>

					{/* Language Selector */}
					<select className='bg-gray-100 border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
						<option>UZ</option>
						<option>RU</option>
						<option>EN</option>
					</select>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
