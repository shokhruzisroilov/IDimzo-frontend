'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AgreementPage() {
	const router = useRouter()
	const [agreed, setAgreed] = useState(false)

	const handleAgree = () => {
		setAgreed(true)
		setTimeout(() => {
			router.push('/login')
		}, 1000)
	}

	return (
		<div className='flex-1 w-full flex items-center justify-center bg-white px-4 py-12'>
			<div className='w-full max-w-4xl'>
				<h1 className='text-3xl sm:text-4xl font-bold text-center text-neutral-800 mb-8'>
					Foydalanuvchi shartnomasi
				</h1>

				<div className='h-[500px] overflow-y-scroll p-6 sm:p-8 rounded-xl border border-gray-300 shadow-sm text-[16px] sm:text-[17px] leading-relaxed text-neutral-800 space-y-6'>
					<p>
						<b>1.1.</b> Ushbu xizmatdan foydalanish orqali siz barcha quyidagi
						shartlarga rozilik bildirasiz.
					</p>
					<p>
						<b>1.2.</b> Telefon raqamingizni kiritish orqali siz ushbu
						foydalanuvchi shartnomasiga avtomatik tarzda rozilik bildirasiz.
					</p>
					<p>
						<b>1.3.</b> Ushbu xizmatdan foydalanish faqat shaxsiy maqsadlarda
						ruxsat etiladi. Tizimdan noqonuniy foydalangan shaxslarga nisbatan
						tegishli choralar ko‘riladi.
					</p>
					<p>(Bu yerga to‘liq shartnoma matnini joylashtiring...)</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
						quod voluptas exercitationem sunt, accusantium explicabo vero,
						voluptates in quo commodi quos? Illum totam atque perferendis porro
						odio assumenda laboriosam vel voluptas voluptatum hic culpa possimus
						excepturi maxime aspernatur explicabo, doloremque similique! Nostrum
						assumenda minima itaque aut illo, incidunt explicabo culpa. Quo
						debitis voluptatum praesentium cumque sit esse provident commodi?
						Deserunt aut blanditiis qui. Temporibus dolores, at eius quo modi
						nulla repellendus assumenda, architecto impedit laborum dignissimos
						aliquid exercitationem? Porro aperiam consequatur sed voluptas,
						debitis expedita impedit nostrum hic itaque recusandae in rerum,
						voluptatum quibusdam? Alias nulla omnis, ipsam accusamus quae
						necessitatibus quos amet, atque corporis quasi doloremque molestiae.
						Voluptate voluptas temporibus, molestiae esse natus dolorum dolore?
						At dolores ipsam earum enim accusantium quos asperiores vero
						tempore, pariatur praesentium neque ad sint fugit maiores ipsum
						consequuntur reiciendis hic beatae magnam ex a magni minima porro
						veritatis. Voluptates laudantium expedita architecto fuga nihil eius
						inventore? Assumenda dolorem libero adipisci nisi quae dolores
						quibusdam saepe dolor hic beatae sed id, aperiam culpa ipsa modi
						doloribus ut mollitia, et ipsam non? Aliquam beatae quis sint
						tenetur vitae totam in quod ea neque, veniam necessitatibus
						similique modi deserunt repellendus, rerum cum, distinctio fuga
						tempore quo magnam cumque laborum! Vero ipsum officia, mollitia
						blanditiis recusandae qui porro eveniet quae numquam sit amet,
						corrupti ex. Fugiat iure, itaque ab placeat modi in repellat non ad
						quas error at repellendus voluptates accusamus ratione excepturi
						cupiditate dolorem earum repudiandae! Dolorum incidunt autem qui
						quidem, tempora quasi quis dolorem doloremque distinctio maxime
						magnam porro recusandae minima minus ratione sint veritatis
						exercitationem molestias ipsa. Aliquid unde magni doloribus. Error
						odit quod repellendus sequi temporibus ad nemo ipsam praesentium
						deleniti optio rem, necessitatibus aut accusamus omnis aliquid
						architecto natus soluta impedit quisquam eos. Pariatur quo
						voluptatum dignissimos rerum illum necessitatibus ad perferendis
						molestias! Exercitationem, corrupti at. Cupiditate minima illo
						obcaecati! Inventore officiis culpa, error minima quasi, repellat
						eius quam quisquam ipsum corporis nihil recusandae debitis optio
						voluptates, obcaecati atque aperiam quis impedit repudiandae? In ad
						eius exercitationem aspernatur officiis earum aperiam quo illo quas
						assumenda. Temporibus natus nemo maxime vel voluptas. Neque corrupti
						dicta ut tenetur recusandae provident, incidunt mollitia! Ad modi
						debitis doloremque molestias vero aperiam sed nemo adipisci atque
						voluptatibus quidem, hic pariatur nobis dignissimos excepturi
						tempora tempore quaerat sequi corporis quasi nisi impedit iusto!
						Incidunt, veritatis? Nisi perspiciatis placeat aliquam vero
						consectetur, eligendi voluptatibus officiis commodi soluta ratione.
						Eligendi necessitatibus iusto officiis asperiores voluptates quo
						nisi corrupti atque sed omnis cumque quidem error assumenda fugit
						eveniet, tempore nesciunt suscipit dolorum explicabo illum, numquam
						quas ipsum ratione! Provident doloremque id illo nobis hic
						voluptates libero possimus quidem, accusamus ut et optio beatae
						vitae magnam similique maiores fugit eius dolorum quaerat eligendi
						totam odit ipsum fuga unde. Saepe, expedita dolor est qui autem,
						accusamus neque labore commodi unde, provident tenetur ad ab minus!
						Voluptatem labore perspiciatis amet veniam veritatis nisi dolor
						delectus eligendi provident id ipsum autem, architecto omnis
						adipisci culpa tempore quae magni tenetur et. Exercitationem
						accusantium cumque saepe deserunt illum voluptate aspernatur
						blanditiis nemo iusto, mollitia voluptas. Sed, iure itaque mollitia
						excepturi sint dicta ratione consequatur expedita assumenda,
						voluptas odit, facilis consequuntur eum doloremque veniam tempore?
						Animi vitae error, beatae magni ducimus quaerat non minima quas
						dolorum hic omnis. At ad ipsam, suscipit culpa ullam voluptate
						maxime, nostrum similique, esse ut facilis libero? Non, suscipit.
						Ratione, suscipit quod distinctio architecto ad obcaecati. In
						corrupti nisi pariatur necessitatibus perferendis possimus rem nemo
						tempore ducimus tempora quia aliquam commodi excepturi totam,
						voluptatibus eligendi quos nulla ad harum eveniet est atque sit!
						Atque aperiam odit ullam, voluptas temporibus accusantium minus
						dignissimos corporis similique consequuntur velit quam eos alias
						vero. Autem quasi porro perspiciatis esse velit magnam cumque
						exercitationem harum, quisquam, et atque dolorem. Expedita hic,
						alias eaque aliquid ut similique aperiam reprehenderit cupiditate
						maxime, fugit beatae at minus recusandae sint adipisci suscipit
						libero ipsum eligendi voluptate a veritatis! Maiores dolore ipsum
						pariatur debitis totam adipisci eos? Numquam quia id, obcaecati
						officia excepturi a illum delectus, veniam eligendi culpa dolorem
						totam sit facilis laborum quo consequatur, minus vitae velit.
						Delectus placeat fuga in accusamus consequatur obcaecati nisi
						ratione, explicabo repellendus, magnam inventore fugit hic dolore.
						Ex ipsam ad numquam voluptatem quas commodi inventore quia ratione
						obcaecati earum rerum fugit consectetur ducimus autem harum
						voluptates atque ipsa dicta fugiat quos iusto, maiores distinctio
						recusandae. Deleniti cumque eveniet, explicabo a nam ipsam ut rem
						obcaecati nostrum possimus. Dolorem voluptates ad dolor autem
						molestiae, accusantium nemo minus deserunt amet quis dolore
						necessitatibus iste modi corrupti iusto assumenda accusamus at
						porro? Natus esse doloribus, molestias dolores neque dicta ipsam
						rerum nesciunt, veniam sequi provident animi. Quas laborum,
						architecto labore quidem in cumque nihil consectetur et quo
						accusamus temporibus reprehenderit molestiae dicta suscipit debitis
						quae aperiam corporis autem? Ducimus, maiores accusamus! Suscipit
						ipsum, qui praesentium asperiores nemo voluptatibus odio sapiente
						tempora enim, recusandae magni sed sint, molestiae expedita
						voluptatem placeat est amet illo consectetur veritatis assumenda?
						Nisi quaerat incidunt dolores laboriosam laudantium, voluptate
						fugiat maiores ducimus illo optio, aut temporibus qui explicabo amet
						aliquam omnis quasi numquam vel ad quod similique impedit? Facilis
						rem non iusto dolore vitae a perspiciatis maiores aperiam expedita
						aut sint nobis, beatae delectus obcaecati at animi, tempora sequi
						ab, voluptates illum quasi quidem autem? Dicta asperiores, delectus
						corrupti necessitatibus eius quasi sit. Exercitationem officia culpa
						dolorum, sunt ratione dicta illo ad, alias quae laborum magnam
						explicabo reprehenderit reiciendis odio saepe eligendi non itaque
						quam maxime temporibus aliquid, dolor labore ducimus nihil. Cumque
						itaque, aut beatae similique ratione quibusdam, eius odio, laborum
						deleniti quos voluptate nihil dolorum reprehenderit! Repellendus
						amet eligendi expedita commodi ab est pariatur alias, quas quam nam
						quaerat nihil enim iure voluptatem aspernatur similique omnis!
						Blanditiis fuga beatae neque asperiores accusantium velit nobis
						sequi unde corrupti quas perferendis excepturi rem expedita eum,
						consequuntur amet, sapiente vel perspiciatis. Alias dolores
						distinctio architecto quos accusantium reprehenderit soluta omnis
						iusto, ipsum voluptatem dolorum, assumenda ipsa nulla fugit
						voluptates explicabo animi praesentium aut cumque optio. Ullam
						labore autem quia obcaecati doloremque ab, pariatur quaerat
						laudantium?
					</p>
				</div>

				{/* Roziman tugmasi */}
				<div className='mt-8 flex justify-center'>
					<button
						onClick={handleAgree}
						className='bg-[#008AFF] hover:bg-[#0072d3] text-white text-lg font-semibold px-8 py-3 rounded-xl transition font-[Montserrat]'
					>
						Roziman
					</button>
				</div>

				{/* Bildirishnoma */}
				{agreed && (
					<p className='mt-6 text-center text-green-600 text-lg font-semibold'>
						✅ Siz rozilik bildirdingiz. Login sahifasiga yo‘naltirilmoqdasiz...
					</p>
				)}
			</div>
		</div>
	)
}
