'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { getNews } from '@/redux/slices/newsSlice'

import { LayoutDashboard, FileText, BookOpen, User } from 'lucide-react'

// Skeleton yuklanayotgan holat
const NewsCardSkeleton = () => (
	<div className='w-[100px] h-[200px] flex flex-col items-center justify-center animate-pulse'>
		<div className='w-[100px] h-[150px] bg-gray-300 rounded mb-2'></div>
		<div className='w-20 h-4 bg-gray-300 rounded'></div>
	</div>
)

export default function AdminDashboard() {
	const dispatch = useDispatch<AppDispatch>()
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.news
	)

	useEffect(() => {
		dispatch(getNews())
	}, [dispatch])

	const stats = [
		{
			title: 'Shartnomalar soni',
			count: 4,
			time: '5 daqiqa oldin eʼlon qilingan',
			bgColor: 'bg-yellow-400',
			icon: LayoutDashboard,
		},
		{
			title: 'Tugash muddati',
			count: 3,
			time: '10 kun ichida tugaydi',
			bgColor: 'bg-blue-400',
			icon: BookOpen,
		},
		{
			title: 'Bekor qilingan shartnoma',
			count: 1,
			time: '5 kun oldin bekor qilingan',
			bgColor: 'bg-blue-400',
			icon: FileText,
		},
		{
			title: 'Jarayonda',
			count: 1,
			time: '15 daqiqa oldin boshlangan',
			bgColor: 'bg-yellow-400',
			icon: User,
		},
	]

	return (
		<div className='p-4 sm:p-6'>
			{/* Yangiliklar bo‘limi */}
			<div className='flex gap-10 overflow-x-auto'>
				{isLoading &&
					Array.from({ length: 5 }).map((_, idx) => (
						<NewsCardSkeleton key={idx} />
					))}

				{!isLoading && error && <p className='text-red-500'>{error}</p>}

				{!isLoading && data.length === 0 && <p>Yangiliklar topilmadi</p>}

				{!isLoading &&
					data.map((item, index) => (
						<div
							key={index}
							className='w-[100px] h-[200px] rounded-lg flex flex-col items-center justify-center'
						>
							<div
								className='w-[100px] h-[150px] mb-4 bg-no-repeat bg-center bg-cover rounded-[20px] border-2 border-[#007BFF]'
								style={{ backgroundImage: `url(${item.mediaUrl})` }}
							/>
							<span className='text-sm text-center line-clamp-2'>
								{item.title.uz}
							</span>
						</div>
					))}
			</div>

			{/* Statistika bo‘limi */}
			<div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10'>
				{stats.map((stat, index) => (
					<div
						key={index}
						className={`${stat.bgColor} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center`}
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
