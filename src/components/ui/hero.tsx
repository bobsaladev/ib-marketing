import { motion } from 'motion/react'

// --- Custom SVG Components for Hand-Drawn Accents ---

const ArrowAccentLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-white stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
)

const ArrowAccentRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-white stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
)

const ArrowBlack1 = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-black stroke-current overflow-visible"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
)

const ArrowBlack2 = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-black stroke-current overflow-visible"
    fill="none"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
)

const CircularBadge = () => (
  <a
    href="https://www.instagram.com/ibmarketingmx/"
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/5"
    aria-label="Abrir Instagram de IB Marketing"
  >
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          fill="none"
        />
        <text className="text-[10px] font-black tracking-[0.16em] uppercase" fill="black">
          <textPath href="#circlePath" startOffset="0%">
            HABLA CON NOSOTROS • HABLA CON NOSOTROS •
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 text-black stroke-current overflow-visible"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </a>
)

const chunkyShadow =
  '1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99, 11px 11px 0 #001A99, 12px 12px 0 #001A99, 13px 13px 0 #001A99, 14px 14px 0 #001A99'

export function Component() {
  return (
    <div className="min-h-screen bg-[#0038FF] flex flex-col font-sans selection:bg-white selection:text-[#0038FF] relative overflow-hidden w-full">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-1">
          <div className="bg-white text-black font-display font-black text-xs md:text-sm px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm">
            IB
            <div
              className="absolute -bottom-1.5 left-0 w-3 h-3 bg-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />
          </div>
          <div className="bg-black text-white font-display font-black text-xs md:text-sm px-3 py-1.5 rounded-full border-[1.5px] border-white shadow-sm">
            MARKETING
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {[
            { label: 'Dolor', href: '#dolor' },
            { label: 'Qué hacemos', href: '#que-hacemos' },
            { label: 'Proceso', href: '#proceso' },
            { label: 'Casos', href: '#casos' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/ibmarketingmx/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full border border-white text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-[#0038FF] transition-colors"
        >
          Instagram
        </a>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 relative z-10 pt-8 pb-36 md:pt-12 md:pb-52 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        {/* Floating cards — kept wide so they clear the title */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[8%] left-2 sm:left-4 md:left-6 lg:left-10 xl:left-16 z-10 pointer-events-auto"
          >
            <a
              href="https://www.instagram.com/buencafemx/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-32 sm:w-36 md:w-44 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-4 md:p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500"
            >
              <div className="w-14 h-14 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center mb-3 shadow-inner border-[3px] border-white/50 overflow-hidden">
                <img
                  src="/buen-cafe.png"
                  alt="Logo de Buen Café"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-1">
                <p className="font-bold text-xs md:text-base text-white">Buen Café</p>
                <p className="text-[9px] md:text-[10px] text-white/80 mt-1">68.1k followers</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[12%] right-2 sm:right-4 md:right-6 lg:right-10 xl:right-16 z-10 pointer-events-auto"
          >
            <div className="w-32 sm:w-36 md:w-44 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-4 md:p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center mb-3 shadow-inner border-[3px] border-white/50 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&q=80"
                  alt="Boutique local en Puerto Vallarta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-1">
                <p className="font-bold text-xs md:text-base text-white">Boutique Sol</p>
                <p className="text-[9px] md:text-[10px] text-white/80 mt-1">3.2k alcance</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-[4%] left-4 md:left-20 lg:left-28 w-20 h-20 md:w-28 md:h-28 z-0 opacity-80">
            <ArrowAccentLeft />
          </div>

          <div className="absolute top-[6%] right-4 md:right-20 lg:right-28 w-20 h-20 md:w-28 md:h-28 z-0 opacity-80">
            <ArrowAccentRight />
          </div>

          <div className="absolute bottom-[2%] right-4 md:right-16 lg:right-24 z-20 pointer-events-auto">
            <CircularBadge />
          </div>
        </div>

        {/* Title stack — above cards */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-20 mt-4 mb-16 pointer-events-none">
          <div className="w-full flex flex-col items-center space-y-2 md:space-y-4">
            <div className="w-full flex justify-start pl-[8%] md:pl-[18%]">
              <h1
                className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] text-white m-0 p-0 uppercase"
                style={{ textShadow: chunkyShadow }}
              >
                #IB
              </h1>
            </div>

            <div className="w-full flex justify-center">
              <h1
                className="text-[clamp(3.2rem,11vw,160px)] font-black leading-[0.85] text-white m-0 p-0 uppercase"
                style={{ textShadow: chunkyShadow }}
              >
                MARKETING
              </h1>
            </div>

            <div className="w-full flex justify-start pl-[12%] md:pl-[22%]">
              <h1
                className="text-[clamp(3.8rem,11vw,140px)] font-black leading-[0.85] text-white m-0 p-0 uppercase"
                style={{ textShadow: chunkyShadow }}
              >
                VALLARTA
              </h1>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Features Section */}
      <section
        id="servicios"
        className="bg-white text-black rounded-t-[2.5rem] md:rounded-t-[3.5rem] px-6 py-12 md:px-10 md:py-16 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)] mt-auto w-full"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-black/10">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              ESTRATEGIAS
              <br />
              DE TRÁFICO
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              más clientes reales para tu negocio
            </p>

            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-2xl p-2 pr-16 text-white shadow-lg relative z-10">
                <div className="w-8 h-8 rounded-full mr-3 border border-white/30 overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=100&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold leading-none">Campañas activas</p>
                  <p className="text-[8px] text-white/70 leading-none mt-1">tráfico medible</p>
                </div>
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black font-black text-[10px] px-3 py-2 rounded-xl z-20 shadow-md">
                + leads
              </div>
            </div>

            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack1 />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-black/10">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              PHOTOSHOOT
              <br />
              LOCAL
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              imágenes listas para web y redes
            </p>

            <div className="relative w-full flex justify-center mt-6">
              <div className="flex items-center bg-[#0038FF] rounded-full p-1.5 text-white shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=280&q=80"
                  alt="Sesión fotográfica para negocios"
                  className="w-36 h-10 object-cover rounded-full"
                />
              </div>

              <div className="absolute -bottom-6 right-1/3 bg-white rounded-full p-2.5 shadow-lg transform rotate-12 z-20">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-black stroke-current"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>

            <div className="hidden md:block absolute -right-12 bottom-8 w-16 h-16 z-30">
              <ArrowBlack2 />
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center relative h-64 border border-black/10">
            <h3 className="text-xl md:text-2xl uppercase leading-tight mb-2 font-black">
              REDES SOCIALES
              <br />& CRECIMIENTO
            </h3>
            <p className="text-[10px] md:text-xs text-black/60 font-bold mb-auto">
              contenido constante que vende
            </p>

            <div className="flex flex-col items-center bg-[#0038FF] rounded-[2rem] px-6 py-4 text-white shadow-lg mt-6 relative w-full max-w-[200px]">
              <p className="text-[9px] font-bold uppercase tracking-wider mb-1">@ibmarketingmx</p>
              <p className="text-xl font-black">Crece ya</p>
              <div className="absolute -bottom-2 left-8 w-5 h-5 bg-[#0038FF] transform rotate-45" />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/ibmarketingmx/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0038FF] px-8 py-3.5 text-sm font-black uppercase text-white transition-all hover:bg-black"
          >
            Hablar por Instagram
          </a>
        </div>
      </section>
    </div>
  )
}
