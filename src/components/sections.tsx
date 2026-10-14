import { motion } from 'motion/react'
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack'
import FlowingMenu from '@/components/ui/FlowingMenu'

const IG_URL = 'https://www.instagram.com/ibmarketingmx/'

type CtaVariant = 'blue' | 'white' | 'outline' | 'outlineLight'

function ConvertCta({
  label,
  variant = 'blue',
  className = '',
}: {
  label: string
  variant?: CtaVariant
  className?: string
}) {
  const variants: Record<CtaVariant, string> = {
    blue: 'bg-[#0038FF] text-white hover:bg-black',
    white: 'bg-white text-black hover:scale-105',
    outline: 'border-2 border-[#0038FF] text-[#0038FF] hover:bg-[#0038FF] hover:text-white',
    outlineLight: 'border-2 border-white text-white hover:bg-white hover:text-[#0038FF]',
  }

  return (
    <a
      href={IG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-black uppercase transition-all ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  )
}

const pains = [
  {
    n: '01',
    title: 'Publicas… y nadie responde',
    copy: 'Contenido inconsistente, sin estrategia. Tu feed se llena, tu local no.',
  },
  {
    n: '02',
    title: 'Fotos que no venden',
    copy: 'Imágenes de celular, luz floja y cero identidad. Google y redes te pasan de largo.',
  },
  {
    n: '03',
    title: 'Ads sin rumbo',
    copy: 'Presupuesto quemado en clics que no llegan a la puerta ni al WhatsApp.',
  },
  {
    n: '04',
    title: 'Tu competencia se ve más pro',
    copy: 'Misma bahía, distinta presencia. Ellos ocupan la atención que debería ser tuya.',
  },
  {
    n: '05',
    title: 'Sin tiempo para redes',
    copy: 'Entre el local, el equipo y los clientes, publicar se queda para “cuando se pueda”.',
  },
  {
    n: '06',
    title: 'No sabes qué está funcionando',
    copy: 'Sin números claros: no hay forma de saber qué trae clientes y qué solo hace ruido.',
  },
]

const services = [
  {
    n: '01',
    title: 'Estrategias de tráfico',
    copy: 'Campañas y embudos pensados para negocios locales: más clientes reales, no vanity metrics.',
    tag: 'Leads',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '02',
    title: 'Photoshoot local',
    copy: 'Sesiones en Puerto Vallarta para tu producto, espacio y equipo — listas para web, menú y redes.',
    tag: 'Foto',
    image:
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80',
  },
  {
    n: '03',
    title: 'Redes y crecimiento',
    copy: 'Calendario, contenido y comunidad. Tu marca activa con una voz clara, todo el mes.',
    tag: 'Social',
    image:
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80',
  },
]

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    copy: 'Revisamos tu presencia, competencia y objetivos. Sabemos dónde estás y a dónde quieres llegar.',
  },
  {
    n: '02',
    title: 'Plan',
    copy: 'Definimos tráfico, foto y redes con prioridades claras — qué hacer primero y por qué.',
  },
  {
    n: '03',
    title: 'Producción',
    copy: 'Disparamos, diseñamos y publicamos. Contenido y campañas listos para mover la aguja.',
  },
  {
    n: '04',
    title: 'Crecimiento',
    copy: 'Medimos, ajustamos y escalamos. Resultados constantes, no un pico de suerte.',
  },
]

const cases = [
  {
    name: 'Buen Café',
    type: 'Café · Puerto Vallarta',
    result: '68.1k',
    metric: 'followers · @buencafemx',
    href: 'https://www.instagram.com/buencafemx/',
    image: '/buen-cafe.png',
  },
  {
    name: 'Boutique Sol',
    type: 'Retail · Centro',
    result: '3.2k',
    metric: 'alcance mensual',
    href: undefined,
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Surf House PV',
    type: 'Servicios · Sayulita–PV',
    result: '2.1x',
    metric: 'leads por WhatsApp',
    href: undefined,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
]

export function PainPoints() {
  return (
    <section id="dolor" className="bg-white text-black relative">
      <div className="w-full px-6 md:px-10 pt-20 md:pt-28 text-center">
        <h2 className="mx-auto mb-4 text-center font-black uppercase leading-[0.9] text-[clamp(1.6rem,5.2vw,4.5rem)]">
          ¿Te suena <span className="text-[#0038FF]">familiar</span>?
        </h2>
        <p className="text-black/55 font-semibold max-w-xl mx-auto mb-6 text-sm md:text-base">
          La mayoría de los negocios locales en Vallarta luchan con lo mismo. Nosotros lo arreglamos.
        </p>
        <ConvertCta label="Arregla esto con nosotros" variant="blue" />
      </div>

      {/*
        Runway height ≈ viewport + scroll needed for each card.
        Keep it tight so the next section starts right after the stack finishes.
      */}
      <div
        data-scroll-stack-runway
        className="relative"
        style={{ height: `calc(100svh + ${pains.length * 55}vh)` }}
      >
        <div className="sticky top-0 h-svh w-full bg-white">
          <ScrollStack useWindowScroll stackPosition="center" scaleEndPosition="center">
            {pains.map((item) => (
              <ScrollStackItem key={item.n}>
                <span className="text-white/70 text-xs font-black tracking-widest">{item.n}</span>
                <h2 className="mt-4 text-2xl md:text-4xl font-black uppercase leading-tight text-white">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm md:text-base text-white/75 font-medium leading-relaxed max-w-xl">
                  {item.copy}
                </p>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      <div className="flex justify-center px-6 py-12 md:py-16">
        <ConvertCta label="Quiero dejar de perder clientes" variant="outline" />
      </div>
    </section>
  )
}

export function QueHacemos() {
  const menuItems = services.map((item) => ({
    link: '#contacto',
    text: item.title,
    image: item.image,
  }))

  return (
    <section id="que-hacemos" className="bg-white text-black">
      <div className="w-full px-6 md:px-10 pt-20 md:pt-28 pb-10 md:pb-14 text-center">
        <h2 className="mx-auto mb-5 text-center font-black uppercase leading-[0.9] text-[clamp(1.6rem,5.2vw,4.5rem)]">
          <span className="block">Tres palancas.</span>
          <span className="block text-[#0038FF]">Un solo equipo.</span>
        </h2>
        <p className="text-black/55 font-semibold text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-6">
          Tráfico que trae clientes, fotos que venden tu local y redes que no se apagan — todo
          pensado para negocios de Puerto Vallarta que quieren llenar mesas, citas y WhatsApp.
        </p>
        <ConvertCta label="Agenda tu palanca" variant="blue" />
      </div>

      <div className="relative h-[min(70vh,560px)] w-full border-y border-black/10">
        <FlowingMenu
          items={menuItems}
          speed={14}
          textColor="#0038FF"
          bgColor="#ffffff"
          marqueeBgColor="#0038FF"
          marqueeTextColor="#ffffff"
          borderColor="rgba(0,56,255,0.25)"
        />
      </div>

      <div className="flex justify-center px-6 py-12 md:py-16">
        <ConvertCta label="Hablemos de tu negocio" variant="outline" />
      </div>
    </section>
  )
}

export function NuestroProceso() {
  return (
    <section
      id="proceso"
      className="bg-[#0038FF] text-white px-6 py-20 md:px-10 md:py-28 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] max-w-3xl mb-12 md:mb-16">
          Del diagnóstico
          <br />
          al <span className="bg-white text-black px-2 inline-block">crecimiento</span>
        </h2>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-[1.75rem] bg-white/10 border border-white/25 p-6 md:p-7 backdrop-blur-sm"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black text-sm font-black mb-5">
                {step.n}
              </span>
              <h3 className="text-xl font-black uppercase mb-3">{step.title}</h3>
              <p className="text-sm text-white/70 font-medium leading-relaxed">{step.copy}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 md:mt-16 flex justify-center">
          <ConvertCta label="Empieza tu diagnóstico" variant="white" />
        </div>
      </div>
    </section>
  )
}

export function CasosExito() {
  return (
    <section id="casos" className="bg-white text-black px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] max-w-3xl mb-4"
        >
          Negocios que ya
          <br />
          <span className="text-[#0038FF]">se mueven</span>
        </h2>
        <p className="text-black/55 font-semibold max-w-xl mb-12 md:mb-16 text-sm md:text-base">
          Resultados reales para marcas locales que apostaron por tráfico, foto y redes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cases.map((item, i) => {
            const Card = (
              <>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0038FF] text-white text-xs font-black px-3 py-1.5 rounded-full">
                    {item.result}
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-black uppercase">{item.name}</h3>
                  <p className="text-xs font-bold text-black/45 mt-1 uppercase tracking-wide">
                    {item.type}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#0038FF]">{item.metric}</p>
                </div>
              </>
            )

            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-[2rem] overflow-hidden bg-white border border-black/8 shadow-sm group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </motion.article>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <ConvertCta label="Quiero resultados así" variant="blue" />
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section
      id="contacto"
      className="bg-[#0A0A0A] text-white px-6 py-24 md:px-10 md:py-32 relative overflow-hidden"
    >
      <div className="absolute -right-24 -top-24 w-[28rem] h-[28rem] rounded-full bg-[#0038FF]/40 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[22rem] h-[22rem] rounded-full bg-white/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6"
        >
          Hagamos que tu
          <br />
          marca <span className="text-[#0038FF]">se note</span>
        </h2>
        <p className="text-white/60 font-semibold max-w-lg mx-auto mb-10 text-sm md:text-base">
          Cuéntanos si necesitas tráfico, sesión fotográfica o un plan de redes. Te respondemos por Instagram.
        </p>
        <a
          href="https://www.instagram.com/ibmarketingmx/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black text-sm md:text-base font-black uppercase tracking-wide hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,56,255,0.45)]"
        >
          Escríbenos ahora
        </a>
        <p className="mt-8 text-xs font-bold text-white/35 uppercase tracking-widest">
          Puerto Vallarta · IB Marketing
        </p>
      </div>
    </section>
  )
}
