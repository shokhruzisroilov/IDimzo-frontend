'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { getNews } from '@/redux/slices/newsSlice'
import { LayoutDashboard, FileText, BookOpen, User } from 'lucide-react'
import NewsModal from '@/components/protected/admin/NewsModal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const NewsCardSkeleton = () => (
	<div className='w-[120px] h-[200px] flex flex-col items-center justify-center animate-pulse'>
		<div className='w-[100px] h-[150px] bg-gray-300 rounded mb-2'></div>
		<div className='w-20 h-4 bg-gray-300 rounded'></div>
	</div>
)

export default function AdminDashboard() {
	const dispatch = useDispatch<AppDispatch>()
	const { data, isLoading, error } = useSelector(
		(state: RootState) => state.news
	)
	const [selectedNews, setSelectedNews] = useState<{
		imageUrl: string
		title: string
	} | null>(null)

	useEffect(() => {
		dispatch(getNews())
	}, [dispatch])

	const stats = [
		{
			title: 'Shartnomalar soni',
			count: 4,
			time: '5 daqiqa oldin',
			bgColor: 'bg-yellow-400',
			icon: LayoutDashboard,
		},
		{
			title: 'Tugash muddati',
			count: 3,
			time: '10 kun ichida',
			bgColor: 'bg-blue-400',
			icon: BookOpen,
		},
		{
			title: 'Bekor qilingan',
			count: 1,
			time: '5 kun oldin',
			bgColor: 'bg-blue-400',
			icon: FileText,
		},
		{
			title: 'Jarayonda',
			count: 1,
			time: '15 daqiqa oldin',
			bgColor: 'bg-yellow-400',
			icon: User,
		},
	]

	return (
		<>
			{/* Modal */}
			<NewsModal
				open={!!selectedNews}
				onClose={() => setSelectedNews(null)}
				imageUrl={selectedNews?.imageUrl || ''}
				title={selectedNews?.title || ''}
			/>

			{/* News Slider */}
			<div className='w-full'>
				{isLoading ? (
					<div className='flex gap-4 py-4 overflow-x-auto'>
						{Array.from(`${data.length}`).map((_, i) => (
							<NewsCardSkeleton key={i} />
						))}
					</div>
				) : error ? (
					<p className='text-red-500 text-center mt-4'>
						Xatolik yuz berdi: {error}
					</p>
				) : (
					<Swiper
						spaceBetween={12}
						slidesPerView={2.2}
						breakpoints={{
							480: { slidesPerView: 3 },
							640: { slidesPerView: 4 },
							768: { slidesPerView: 5 },
							1024: { slidesPerView: 6 },
							1280: { slidesPerView: 8 },
							1536: { slidesPerView: 10 },
						}}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						loop={true}
						modules={[Autoplay]}
						className='py-4'
					>
						{data.map((item, index) => (
							<SwiperSlide key={index}>
								<div
									className='w-[100px] h-[200px] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform'
									onClick={() =>
										setSelectedNews({
											imageUrl: item.mediaUrl,
											title: item.title?.uz,
										})
									}
								>
									<div
										className='w-[100px] h-[150px] mb-2 bg-no-repeat bg-center bg-cover rounded-[20px] border-2 border-[#007BFF]'
										style={{ backgroundImage: `url(${item.mediaUrl})` }}
									/>
									<span className='text-sm text-center line-clamp-2 px-1'>
										{item.title?.uz}
									</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>

			{/* Statistika */}
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
		</>
	)
}
