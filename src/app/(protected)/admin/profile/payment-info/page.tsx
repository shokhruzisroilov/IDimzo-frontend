'use client'

const PaymentInfo = () => {
	return (
		<div className='px-4 py-6'>
			<h2 className='text-2xl font-medium text-neutral-900 mb-6'>
				Hisob raqami
			</h2>

			<div className='flex flex-col lg:flex-row gap-6'>
				{/* Payment Cards */}
				<div className='flex flex-col gap-4 w-full lg:w-2/3'>
					{/* Card 1 */}
					<div className='bg-blue-600/10 rounded-[5px] p-4 flex justify-between items-center'>
						<div className='flex items-center gap-4'>
							<div className='w-14 h-10 bg-white rounded-[5px] flex items-center justify-center'>
								<div className='relative w-10 h-3'>
									<div className='absolute inset-0 bg-teal-500'></div>
									<div className='absolute top-[3.5px] left-[3px] w-8 h-2 bg-white'></div>
								</div>
							</div>
							<div>
								<p className='text-sm font-medium'>Payme</p>
								<p className='text-xs text-neutral-700 font-medium'>
									05 Yan 2025
								</p>
							</div>
						</div>
						<p className='text-sm font-medium'>+200 000.68 so’m</p>
					</div>

					{/* Card 2 */}
					<div className='bg-blue-600/10 rounded-[5px] p-4 flex justify-between items-center'>
						<div className='flex items-center gap-4'>
							<div className='w-14 h-10 bg-white rounded-[5px] flex items-center justify-center'>
								<div className='relative w-10 h-2.5'>
									<div className='absolute left-0 top-[1px] w-2.5 h-2.5 bg-blue-600 rounded-full'></div>
									<div className='absolute left-[12px] top-0 w-7 h-2.5 bg-black'></div>
								</div>
							</div>
							<div>
								<p className='text-sm font-medium'>Click</p>
								<p className='text-xs text-neutral-700 font-medium'>
									03 Yan 2025
								</p>
							</div>
						</div>
						<p className='text-sm font-medium'>+1 000 000 so’m</p>
					</div>
				</div>

				{/* Call Center Box */}
				<div className='w-full lg:w-1/3 bg-slate-100 rounded-[10px] p-6 space-y-4'>
					<h3 className='text-xl font-medium'>Call markazi</h3>

					{/* Telefon raqami havola */}
					<a
						href='tel:+998712002900'
						className='flex items-center gap-2 hover:underline'
					>
						<div className='w-5 h-5 border-2 border-sky-500 rounded-full'></div>
						<p className='text-base text-sky-500'>+998 71 200 29 00</p>
					</a>

					{/* Telegram bot havola */}
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
		</div>
	)
}

export default PaymentInfo
