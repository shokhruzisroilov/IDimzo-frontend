'use client'

import { LayoutDashboard, FileText, BookOpen, User } from 'lucide-react'
import first from '../../../assets/images/1.png'
import second from '../../../assets/images/2.png'
import thirt from '../../../assets/images/3.png'
import forth from '../../../assets/images/4.png'
import fifth from '../../../assets/images/5.png'

export default function AdminDashboard() {
	const services = [
		{ name: 'Biz', url: first },
		{ name: 'Yangilik', url: second },
		{ name: 'Mygov.uz', url: thirt },
		{ name: 'ONE ID', url: forth },
		{ name: 'ID karta', url: fifth },
	]

	const stats = [
		{
			title: 'Количество контрактов',
			count: 4,
			time: 'объявлено 5 мин назад',
			bgColor: 'bg-yellow-400',
			icon: LayoutDashboard,
		},
		{
			title: 'Дата окончания срока',
			count: 3,
			time: 'объявлено через 10 дней',
			bgColor: 'bg-blue-400',
			icon: BookOpen,
		},
		{
			title: 'Растрогнутый контракт',
			count: 1,
			time: 'объявлено 5 дней назад',
			bgColor: 'bg-blue-400',
			icon: FileText,
		},
		{
			title: 'В процессе',
			count: 1,
			time: 'объявлено 15 мин назад',
			bgColor: 'bg-yellow-400',
			icon: User,
		},
	]

	return (
		<div className='p-6'>
			{/* Services Section */}
			<div className='flex gap-10'>
				{services.map((service, index) => (
					<div
						key={index}
						className='w-[100px] h-[200px]  rounded-lg flex flex-col items-center justify-center '
					>
						<div
							className='w-[100px] h-[150px] mb-4 bg-no-repeat bg-center bg-contain'
							style={{ backgroundImage: `url(${service.url.src})` }}
						/>
						<span className='text-sm'>{service.name}</span>
					</div>
				))}
			</div>

			{/* Stats Section */}
			<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
				{stats.map((stat, index) => (
					<div
						key={index}
						className={`${stat.bgColor} text-white p-4 rounded-lg flex flex-col items-center justify-center`}
					>
						<stat.icon className='w-8 h-8 mb-2' />
						<h3 className='text-lg font-semibold'>{stat.title}</h3>
						<p className='text-2xl font-bold'>{stat.count}</p>
						<p className='text-sm'>{stat.time}</p>
					</div>
				))}
			</div>
		</div>
	)
}
