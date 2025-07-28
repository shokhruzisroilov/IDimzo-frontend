'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AgreementPage() {
	const router = useRouter()
	const [agreed, setAgreed] = useState(false)

	const handleAgree = () => {
		setAgreed(true)

		// 1-2 soniyadan keyin login sahifaga yo‘naltiramiz
		setTimeout(() => {
			router.push('/login')
		}, 100)
	}

	return (
		<div className='min-h-screen bg-white px-4 py-12 flex flex-col items-center'>
			<div className='w-full'>
				<h1 className='text-4xl font-bold text-center text-neutral-800 mb-8 '>
					Пользовательское соглашение
				</h1>

				<div className='h-[700px] overflow-y-scroll p-8 rounded-xl border border-gray-300 shadow-sm text-[17px] leading-relaxed text-neutral-800 space-y-6'>
					<p>
						<b>1.1.</b> Общество с Ограниченной Ответственностью «Norma» в лице
						директора Перпера М.М., именуемое в дальнейшем «Правообладатель»,
						настоящим предоставляет физическим лицам, акцептирующим настоящую
						оферту путем выполнения оговоренных ниже действий (далее -
						«Пользователь»), право пользования программным продуктом «Norma
						Online – информационно-поисковые и экспертные системы» (далее – «ПП
						«Norma Online»), включающего в себя базы данных
						информационно-поисковых и электронных справочных систем «Norma» в
						онлайн режиме, а также функционал сайта:{' '}
						<a
							href='http://nrm.uz'
							target='_blank'
							className='text-blue-600 underline'
						>
							http://nrm.uz
						</a>
					</p>
					<p>
						<b>1.2.</b> Оплата по настоящей Оферте признается ее Акцептом, т.е.
						полным и безоговорочным принятием всех условий данной Оферты и всех
						ее приложений.
					</p>
					<p>
						<b>1.3.</b> Договор между Правообладателем и Пользователем считается
						заключенным с момента акцепта на вышеуказанных условиях.
					</p>
					<p>... (Bu yerga qolgan shartnoma matnini joylashtiring)</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione
						repellendus nobis consectetur molestiae, enim explicabo harum in,
						asperiores aperiam excepturi totam temporibus soluta fuga architecto
						possimus, voluptatem reiciendis beatae. Incidunt eveniet possimus,
						nulla nemo sint ipsa laudantium porro dolores maxime, quam error
						quia aliquam sit ipsam. Quibusdam illum quisquam laudantium eaque
						necessitatibus laboriosam quasi corrupti neque voluptatibus cumque
						unde, provident maiores, voluptatem ipsa? A tenetur non ullam ea
						illum, maxime, minus natus fugit odio beatae ipsum error officiis.
						Voluptas id cum fugit iusto odit maiores eligendi ullam sapiente!
						Eaque, dignissimos. Ipsa dicta libero corporis voluptas corrupti
						mollitia, et quaerat omnis similique animi reprehenderit maxime quos
						perspiciatis voluptate distinctio molestiae! Dolore vitae aperiam,
						aliquid odit ad delectus officiis, beatae odio vero, excepturi
						pariatur. Quasi at veritatis tempora dignissimos incidunt neque
						ullam recusandae quas, a voluptatum et, doloribus ea illo!
						Exercitationem qui suscipit earum doloribus nisi adipisci cupiditate
						voluptate sequi quos! Vel animi mollitia dolorum veritatis, iste
						aspernatur quidem dolores sunt neque! Repellat, vitae pariatur!
						Atque ipsam earum odio fugiat repudiandae soluta, et at harum
						sapiente eaque deleniti voluptate debitis reprehenderit quos est
						porro ex voluptas ducimus tempore. Id, nam. Neque laborum maiores
						culpa omnis unde nobis quis dolorum, sunt numquam soluta
						voluptatibus sapiente fugit nulla deleniti dolorem cumque eius
						excepturi provident error ab fuga. Soluta eligendi voluptatibus
						maiores cupiditate perspiciatis. Atque laborum commodi deleniti
						dolor fugit possimus tempora dolorum nam saepe odit totam placeat
						fugiat culpa beatae ab blanditiis sed, eum ipsa enim dolore animi
						labore rem rerum harum! Iste at sunt, sint itaque perferendis
						doloremque. Nostrum, asperiores alias deserunt voluptates iusto
						atque, ducimus ullam in ea perferendis consequatur nam
						exercitationem labore aliquid praesentium corporis eos rerum enim
						itaque, odio corrupti laborum! Laborum doloremque illo expedita
						molestias praesentium dolor dicta, voluptates totam cupiditate quia
						nobis, cumque distinctio, eos voluptate veniam id sed ipsa natus
						omnis quasi rem deserunt? Distinctio aut error accusantium impedit
						deleniti in, eos voluptate, facilis temporibus ullam sapiente eius
						at ducimus illo assumenda eum corrupti odit ipsum unde labore velit.
						Laudantium, in id corporis iure a necessitatibus nisi sit
						consequatur dolorum accusamus delectus hic magnam unde veritatis
						incidunt molestiae enim nesciunt tempore. Magni inventore ipsam odit
						quam magnam. Molestias beatae quo mollitia modi, ratione laborum
						nobis dicta, consectetur quisquam sunt quae perferendis. Quasi
						perspiciatis, amet vitae soluta obcaecati doloremque. Voluptatum
						neque illum quaerat ex quod accusantium quam recusandae incidunt
						asperiores architecto ducimus harum aperiam ut reiciendis laborum
						expedita at assumenda, cupiditate totam? Id, temporibus aspernatur
						alias nihil delectus velit animi deserunt. Id impedit similique
						reprehenderit ipsam consequatur, quia velit possimus facere deleniti
						vitae mollitia excepturi harum corporis omnis, culpa accusantium nam
						rerum molestiae doloremque odio aut sunt. Dolor natus itaque beatae
						tempore aspernatur rem sint voluptates libero quasi consequuntur,
						sunt exercitationem suscipit doloribus, nesciunt, nihil iure optio.
						Ipsum laboriosam provident modi? Eveniet porro commodi cumque
						tempora debitis repellat numquam, excepturi expedita voluptas iure
						eius recusandae? In, nihil? Quam, totam veniam eum aliquam
						reprehenderit ratione nihil, odio quod praesentium deleniti,
						obcaecati suscipit repellendus est labore quibusdam quidem ipsa.
						Quidem aliquam nobis quis perferendis explicabo obcaecati eaque
						laborum ea, culpa natus cum inventore dolor non ab accusamus velit
						aliquid totam reprehenderit beatae optio voluptatibus tempora
						assumenda illo rerum. Quam ipsa doloribus numquam? Ipsa eaque,
						dolorem laboriosam tempora sunt quia incidunt voluptatibus
						architecto modi sint, odio quas dolorum eveniet id repellendus et!
						Numquam enim rem dolore, veritatis quia incidunt harum illum?
						Aperiam, et consequuntur natus maiores, earum minus eveniet, eum hic
						impedit soluta laborum totam blanditiis corrupti dolore quis. Minus
						cum quia repudiandae voluptas similique vero quae eum, laudantium
						nostrum sequi dolorem error aut nulla modi, adipisci quam animi qui
						voluptates earum expedita accusantium, ipsum nobis illum dolores?
						Voluptatem odio corporis adipisci ipsum repudiandae laborum
						distinctio minus expedita id consequatur, corrupti itaque, voluptate
						impedit. Consectetur animi asperiores veritatis ipsam nihil unde!
						Laboriosam mollitia dolores laborum error cumque quo eum sunt
						recusandae obcaecati vero quaerat ducimus culpa fugit voluptate in
						officiis consequuntur voluptatem ea dicta, asperiores sapiente
						saepe. Quo, consectetur labore veritatis, corporis assumenda, nam
						blanditiis modi nisi ullam natus explicabo vel eius tempore quas
						molestias eaque sequi? Et doloribus harum molestiae vitae
						consectetur eum veritatis incidunt id assumenda ducimus eos iste
						quis atque libero ab quas aliquam fugiat, doloremque culpa numquam
						quidem earum laudantium eveniet. Numquam molestias error odio quam
						illum maiores. Consequuntur possimus deserunt mollitia inventore
						ipsum libero. Deserunt voluptatem, porro autem soluta ad placeat
						amet maiores fugit quibusdam est nihil aliquam iusto accusamus!
						Porro voluptates aliquam itaque quam odit a id inventore praesentium
						deleniti autem amet vel excepturi saepe, sapiente ipsum
						reprehenderit repellendus doloribus? Nostrum error quasi, similique
						veniam incidunt adipisci iusto blanditiis eaque exercitationem
						dicta, quod, asperiores numquam saepe. Aliquam itaque, ab quisquam
						minima perferendis cumque totam architecto exercitationem quos cum a
						unde aspernatur sint nostrum possimus ipsa voluptatum! Delectus
						laboriosam fuga et dolor fugit magni officiis dolore blanditiis,
						modi, possimus veniam odio similique doloribus asperiores tempore
						debitis quasi deserunt beatae accusantium, facere repellat
						quibusdam? Modi quaerat laborum quis esse ex consequatur velit
						asperiores soluta nostrum ipsum dolorem culpa accusamus odio illum
						doloremque nihil numquam unde suscipit veniam, consectetur atque
						maxime. Dolorem nulla autem facilis qui consequatur reprehenderit
						impedit quam at non dignissimos inventore libero nihil culpa
						reiciendis alias quia explicabo modi, voluptatibus architecto
						ratione enim quisquam velit ut! Molestiae deleniti nihil atque rerum
						amet totam assumenda facilis eum deserunt quia iure ullam est
						soluta, incidunt eaque et eveniet, modi voluptate hic molestias
						tempore illum perspiciatis. Et itaque quaerat similique provident ex
						earum incidunt eum illo dolorum quasi quas eligendi saepe beatae
						ratione nostrum rerum illum, expedita rem qui doloremque eaque
						sapiente quidem obcaecati. Nostrum quam est tempore obcaecati neque
						rem voluptatibus aliquid odit! Praesentium, earum. Non fugiat unde
						fugit voluptatem numquam? Deserunt eveniet illo rerum commodi
						deleniti odit molestias minus laudantium voluptatibus possimus
						neque, ad facere quam! Harum commodi sequi et, soluta unde,
						corporis, nisi inventore veniam totam omnis nulla. Dolores fugiat
						modi, autem sed laudantium praesentium incidunt ea reiciendis veniam
						repellat? Adipisci cumque minima enim velit debitis nobis eius, cum
						voluptate obcaecati quos! Quas, doloremque!
					</p>
				</div>

				{/* Agree button */}
				<div className='mt-8 flex justify-center'>
					<button
						onClick={handleAgree}
						className='bg-[#008AFF] hover:bg-[#0072d3] text-white text-lg font-semibold px-8 py-3 rounded-xl transition font-[Montserrat]'
					>
						Я согласен
					</button>
				</div>

				{/* Agreement notification */}
				{agreed && (
					<p className='mt-6 text-center text-green-600 text-lg font-semibold'>
						✅ Вы согласились. Перенаправляем на страницу входа...
					</p>
				)}
			</div>
		</div>
	)
}
