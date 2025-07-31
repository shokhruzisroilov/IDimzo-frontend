'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '@/redux/slices/userSlice'
import { RootState, AppDispatch } from '@/redux/store'
import InfoSkeleton from '@/components/protected/admin/profile/InfoSkeleton'

const Info = () => {
	const dispatch = useDispatch<AppDispatch>()
	const {
		data: user,
		isLoading,
		error,
	} = useSelector((state: RootState) => state.user)

	useEffect(() => {
		dispatch(getUser())
	}, [dispatch])

	if (error) return <p className='text-red-500'>{error}</p>

	const fullName =
		[user?.firstName, user?.lastName].filter(Boolean).join(' ') || '–'
	const phone = user?.phoneNumber || '–'
	const email = user?.email || '–'
	const id = user?.id || '–'
	const role =
		user?.role === 'ADMIN'
			? 'Administrator'
			: user?.role === 'USER'
			? 'Oddiy foydalanuvchi'
			: '–'

	return (
		<div>
			<h2 className='text-2xl font-medium text-neutral-900 py-5'>
				{`Shaxsiy ma'lumotlar`}
			</h2>

			{isLoading ? (
				<InfoSkeleton />
			) : (
				<div className='flex flex-col lg:flex-row items-start justify-between gap-10'>
					{/* Foydalanuvchi kartasi */}
					<div className='w-full bg-slate-100 rounded-[10px] p-6 flex flex-col sm:flex-row gap-12'>
						<div className='flex flex-col items-center sm:items-start'>
							<span className='mt-2 text-xs text-zinc-500'>ID: {id}</span>
							<div className='w-36 h-36 bg-green-500 rounded-full overflow-hidden mt-5 flex items-center justify-center text-white text-xl'>
								{user?.firstName?.charAt(0) || 'U'}
							</div>
						</div>

						{/* Ma'lumotlar */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 flex-1'>
							<div>
								<p className='text-xs text-zinc-500'>Ism Familiya</p>
								<p className='text-base font-medium text-black'>{fullName}</p>
							</div>
							<div>
								<p className='text-xs text-zinc-500'>Telefon raqami</p>
								<p className='text-base font-medium text-black'>{phone}</p>
							</div>
							<div>
								<p className='text-xs text-zinc-500'>Email</p>
								<p className='text-base font-medium text-black'>{email}</p>
							</div>
							<div>
								<p className='text-xs text-zinc-500'>Roli</p>
								<p className='text-base font-medium text-black'>{role}</p>
							</div>
						</div>
					</div>

					{/* Call markazi */}
					<div className='w-full sm:w-80 bg-slate-100 rounded-[10px] p-4 space-y-4'>
						<h3 className='text-xl font-medium text-black'>Call markazi</h3>

						{/* Telefon raqami */}
						<a
							href='tel:+998712002900'
							className='flex items-center gap-2 hover:underline'
						>
							<div className='w-5 h-5 border-2 border-sky-500 rounded-full'></div>
							<p className='text-base text-sky-500'>+998 71 200 29 00</p>
						</a>

						{/* Telegram bot */}
						<a
							href='https://t.me/Id_imzo_bot'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 hover:underline'
						>
							<div className='w-5 h-5 border-2 border-sky-500 rounded-full'></div>
							<p className='text-base text-sky-500'>@Id_imzo_bot</p>
						</a>
					</div>
				</div>
			)}
		</div>
	)
}

export default Info
