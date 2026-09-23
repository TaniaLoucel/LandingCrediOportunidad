import { useState } from "react";

const assetPathPrefix = "/assets";

const imgSol0212 = `${assetPathPrefix}/adbad.png`;
const imgImage1 = `${assetPathPrefix}/f59f5.png`;
const imgInstD1 = `${assetPathPrefix}/9c3b4.png`;
const imgGroup99434 = `${assetPathPrefix}/06af1.svg`;
const imgEllipse685 = `${assetPathPrefix}/41f97.svg`;
const imgDollarCoin = `${assetPathPrefix}/3a2df.svg`;
const imgMoneyBundle = `${assetPathPrefix}/5cc27.svg`;
const imgBagSmile = `${assetPathPrefix}/5510c.svg`;
const imgShopStar = `${assetPathPrefix}/0b63f.svg`;
const imgVuesaxLinearProfile = `${assetPathPrefix}/31488.svg`;
const imgEllipse686 = `${assetPathPrefix}/8a111.svg`;
const imgWebLine = `${assetPathPrefix}/7a51f.svg`;
const imgVuesaxLinearShop = `${assetPathPrefix}/2f00b.svg`;
const imgVuesaxLinearLocation = `${assetPathPrefix}/f347a.svg`;
const imgVector = `${assetPathPrefix}/3f331.svg`;
const imgArrowUp = `${assetPathPrefix}/5311e.svg`;
const imgArrowShortDown = `${assetPathPrefix}/e0c4a.svg`;
const imgEllipse687 = `${assetPathPrefix}/bce1a.svg`;
const imgRectangle14 = `${assetPathPrefix}/35f71.svg`;
const imgTickCircle = `${assetPathPrefix}/90a30.svg`;
const imgGroup99510 = `${assetPathPrefix}/5f412.svg`;

const benefitCards = [
  {
    icon: <img alt="" src={imgGroup99434} className="w-[72px] h-[72px]" />,
    title: "Descuentos exclusivos",
    desc: "Precios y descuentos adicionales solo por comprar al crédito.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse685} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgDollarCoin} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Cuota fija mensual",
    desc: "Sabes cuánto pagas cada mes desde el primer día.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse685} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgMoneyBundle} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Prestamos en efectivos",
    desc: "Como cliente activo, optas a efectivo de $300 a $4,000, sujeto a evaluación.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse685} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgBagSmile} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Regalías y experiencias",
    desc: "Regalos, cupones en comercios aliados y entradas VIP a eventos.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse685} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgShopStar} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Garantía extendida gratis",
    desc: "Meses adicionales de garantía sin costo si lo llevas al crédito.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse685} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgVuesaxLinearProfile} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Sin récord crediticio",
    desc: "Tu historial no es requisito: evaluamos tu capacidad real de pago.",
  },
];

const paymentMethods = [
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse686} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgWebLine} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "En línea",
    desc: "Con tarjeta de débito o crédito, desde tu celular o computadora, 24/7.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse686} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgVuesaxLinearShop} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "En tienda",
    desc: "En la caja de cualquier tienda la curacao del país, como siempre.",
  },
  {
    icon: (
      <div className="relative w-[72px] h-[72px]">
        <img alt="" src={imgEllipse686} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-[18px] w-[36px] h-[36px]">
          <img alt="" src={imgVuesaxLinearLocation} className="w-full h-full" />
        </div>
      </div>
    ),
    title: "Puntos y comercios afiliados",
    desc: (
      <>
        Red Punto Xpress, supermercados, farmacias y más. Ver el{" "}
        <span className="underline">listado completo</span>.
      </>
    ),
  },
];

const faqLeft = [
  {
    id: "faq-l1",
    question: "¿Qué edad debo tener para solicitar un crédito?",
    answer: "Se debe ser mayor de edad y tener como máximo 70 años.",
    defaultOpen: true,
  },
  { id: "faq-l2", question: "¿Cuánto es el monto mínimo que puedo financiar?", answer: "" },
  { id: "faq-l3", question: "¿Cuánto tiempo debo tener trabajando para solicitar crédito?", answer: "" },
  { id: "faq-l4", question: "¿Qué documentos necesito si soy cliente nuevo?", answer: "" },
];

const faqRight = [
  { id: "faq-r1", question: "¿Cuánto es el monto mínimo que puedo financiar?", answer: "" },
  { id: "faq-r2", question: "¿Cuál es el ingreso mínimo que debo obtener para aplicar?", answer: "" },
  { id: "faq-r3", question: "¿Cuánto es el monto mínimo que puedo financiar?", answer: "" },
  { id: "faq-r4", question: "¿Puedo pedir un préstamo en efectivo?", answer: "" },
  { id: "faq-r5", question: "¿Cuál es el máximo que puedo recibir en un préstamo en efectivo?", answer: "" },
];

function FaqItem({ question, answer, defaultOpen = false }: { id?: string; question: string; answer?: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`bg-white rounded-[25px] border ${open ? "border-[#00239c]" : "border-[#e3e3e3]"} overflow-hidden`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-6 text-left gap-4"
      >
        <span
          className="font-['Roboto:Bold'] font-bold text-[#001152] text-[18px] leading-[24px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {question}
        </span>
        <img
          alt=""
          src={open ? imgArrowShortDown : imgArrowUp}
          className="shrink-0 rotate-90" style={{ width: "12px", height: "20px" }}
        />
      </button>
      {open && answer && (
        <p
          className="px-6 pb-5 font-['Roboto:Regular'] text-[#3a3a3a] text-[16px] leading-[24px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "linear-gradient(102.52deg, #00239c 28.8%, #001152 137.28%)" }}
      >
        {/* decorative sun */}
        <div className="absolute right-0 top-[232px] w-[682px] h-[372px] opacity-20 pointer-events-none">
          <img alt="" src={imgSol0212} className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* nav tabs */}
        <div className="relative z-10 flex justify-center pt-8">
          <div className="relative flex rounded-[25px] overflow-hidden" style={{ background: "rgba(255,255,255,0.3)" }}>
            <button className="bg-[#ffcc02] rounded-[24px] px-10 py-3 font-['Inter:Bold'] font-bold text-[#00239c] text-[14px] leading-[17px]">
              CrediOportunidad
            </button>
            <button className="px-10 py-3 font-['Inter:Bold'] font-bold text-white text-[14px] leading-[17px]">
              Tarjeta de crédito
            </button>
          </div>
        </div>

        {/* hero content */}
        <div className="relative z-10 max-w-[1328px] mx-auto px-8 pt-12 pb-16 flex items-center gap-8">
          <div className="flex-1 min-w-0">
            <p
              className="font-['Roboto:Bold'] font-bold text-[#f9e772] text-[16px] leading-[19.5px] mb-4"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Cada día es una oportunidad
            </p>
            <p
              className="font-['Roboto:Bold'] font-bold text-white text-[52px] leading-[1] mb-1"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Estrena hoy con
            </p>
            <p className="text-[52px] leading-[1] mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>
              <span className="font-['Roboto:Bold'] font-bold text-[#f4da40]">C</span>
              <span className="font-['Roboto:Bold'] font-bold text-white">redi</span>
              <span className="font-['Roboto:Bold'] font-bold text-[#f4da40]">O</span>
              <span className="font-['Roboto:Bold'] font-bold text-white">portunidad</span>
            </p>
            <p
              className="font-['Roboto:Light'] font-light text-[#c9d2ec] text-[20px] leading-[25.5px] mb-8 max-w-[654px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              El crédito que te conoce: sin récord crediticio y con cuota fija mensual.
            </p>
            <button className="bg-[#ffcc02] rounded-[24px] px-10 py-3 font-['Inter:Bold'] font-bold text-[#00239c] text-[14px] leading-[17px]">
              Solicita tu crédito
            </button>
          </div>
          <div className="shrink-0 w-[460px] hidden lg:block">
            <img alt="CrediOportunidad appliances" src={imgImage1} className="w-full h-auto" />
          </div>
        </div>

        {/* dots indicator */}
        <div className="flex justify-center gap-2 pb-6">
          <div className="w-5 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </section>

      {/* ── CALIFICA SECTION ── */}
      <section className="relative w-full">
        <div className="max-w-[1328px] mx-auto px-8 relative" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
          <div className="relative flex items-center gap-8 bg-[#00239c] rounded-[25px] overflow-hidden min-h-[272px]">
            <img
              alt=""
              src={imgRectangle14}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute left-0 top-0 w-[280px] h-full hidden md:block">
              <img alt="Asesor" src={imgInstD1} className="h-full w-auto object-cover" />
            </div>
            <div className="relative z-10 ml-[300px] md:ml-[300px] px-4 py-10 w-full max-w-[1000px]">
              <p
                className="font-['Roboto:Bold'] font-bold text-[#ffcc02] text-[36px] leading-[39.1px] mb-3"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                ¿Quieres saber si calificas?
              </p>
              <p
                className="font-['Roboto:Regular'] text-white text-[20px] leading-[24px] mb-4"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Si recibes{" "}
                <span className="font-['Roboto:ExtraBold'] font-extrabold text-[#ffcc02]">remesas</span>,{" "}
                <span className="font-['Roboto:Bold'] font-bold text-[#ffcc02]">trabajas por sueldo</span> o{" "}
                <span className="font-['Roboto:Bold'] font-bold text-[#ffcc02]">tienes tu negocio propio</span>
                , ya estás dentro. Con una de esas nos basta.
              </p>
              <p
                className="font-['Roboto:Regular'] text-white text-[20px] leading-[24px] mb-4"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Ten a la mano:
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  "Tu DUI vigente",
                  "Recibo de agua, luz o teléfono",
                  "Comprobante de ingresos",
                  "Referencias personales y familiares",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <img alt="" src={imgTickCircle} className="w-6 h-6 shrink-0" />
                    <span
                      className="font-['Roboto:Regular'] text-white text-[20px] leading-[24px]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p
                className="font-['Roboto:Regular'] text-white text-[20px] leading-[24px] mt-4"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                ¡Eso es todo! Con eso ya podemos empezar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section className="bg-[#fafafa] w-full py-16">
        <div className="max-w-[1328px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-11">
            <div className="max-w-[878px]">
              <p
                className="font-['Roboto:Bold'] font-bold text-[#001152] text-[36px] leading-[39.1px] mb-1"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Más allá de un crédito, una nueva oportunidad para ti
              </p>
              <p className="text-[20px] leading-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <span className="font-['Roboto:Regular'] text-[#3a3a3a]">
                  CrediOportunidad es el programa que te da{" "}
                </span>
                <span className="font-['Roboto:Bold'] font-bold text-[#001152]">
                  beneficios exclusivos por tus compras al crédito
                </span>
                <span className="font-['Roboto:Regular'] text-[#3a3a3a]">, en cualquier tienda la curacao del país.</span>
              </p>
            </div>
            <button className="shrink-0 bg-[#ffcc02] rounded-[24px] px-10 py-3 font-['Inter:Bold'] font-bold text-[#00239c] text-[14px] leading-[17px]">
              Aplica ahora
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[#e3e3e3] rounded-[25px] flex flex-col items-center gap-6 px-10 py-8 text-center"
              >
                {card.icon}
                <div>
                  <p
                    className="font-['Roboto:Bold'] font-bold text-[#00239c] text-[18px] leading-[27px] mb-1"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="font-['Roboto:Regular'] text-[#3a3a3a] text-[14px] leading-[21.7px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STEPS SECTION ── */}
      <section className="bg-white w-full py-16">
        <div className="max-w-[1328px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-start">
          {/* left column */}
          <div className="flex flex-col gap-10 lg:w-[535px] shrink-0">
            <div>
              <p className="text-[60px] leading-[42px] mb-2" style={{ fontVariationSettings: '"wdth" 100' }}>
                <span className="font-['Roboto:Bold'] font-bold text-[#ffcc02]">C</span>
                <span className="font-['Roboto:Bold'] font-bold text-[#00239c]">redi</span>
                <span className="font-['Roboto:Bold'] font-bold text-[#ffcc02]">O</span>
                <span className="font-['Roboto:Bold'] font-bold text-[#00239c]">portunidad</span>
              </p>
              <p
                className="font-['Roboto:Bold'] font-bold text-[#3a3a3a] text-[36px] leading-[36.8px] mt-16 mb-3"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                es el crédito con el que la curacao te dice que sí
              </p>
              <p
                className="font-['Roboto:Regular'] text-[#3a3a3a] text-[20px] leading-[27.225px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Estrena hoy y paga en cuotas fijas que conoces desde el primer día. Tu crédito formal y segura, sin sorpresas.
              </p>
            </div>
            <button className="self-start bg-[#ffcc02] rounded-[24px] px-10 py-3 font-['Inter:Bold'] font-bold text-[#00239c] text-[14px] leading-[17px]">
              Aplica ahora
            </button>
          </div>

          {/* steps */}
          <div className="flex flex-col gap-3 flex-1">
            {[
              {
                num: "1",
                title: "Aplica en minutos",
                desc: (
                  <>
                    <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Presenta la documentación que un asesor de pedirá en{" "}
                    </span>
                    <span
                      className="font-['Roboto:Bold'] font-bold text-[#00239c] underline"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      tienda
                    </span>
                    <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {" "}o por{" "}
                    </span>
                    <span
                      className="font-['Roboto:Bold'] font-bold text-[#00239c] underline"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      WhatsApp
                    </span>
                    <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>.</span>
                  </>
                ),
              },
              {
                num: "2",
                title: "Un asesor te aprueba",
                desc: (
                  <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Nuestro equipo te evalúa y confirma tu límite.
                  </span>
                ),
              },
              {
                num: "3",
                title: "Estrena y paga a tu ritmo",
                desc: (
                  <>
                    <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>
                      Elige lo que necesitas en tu{" "}
                    </span>
                    <span
                      className="font-['Roboto:SemiBold'] font-semibold text-[#00239c] underline"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      tienda más cercana
                    </span>
                    <span className="font-['Roboto:Regular']" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {" "}y llévatelo con una cuota fija al mes.
                    </span>
                  </>
                ),
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white border border-[#e3e3e3] rounded-[25px] flex items-start gap-6 px-8 py-6"
              >
                <div className="relative shrink-0 w-[42px] h-[42px]">
                  <img alt="" src={imgEllipse687} className="absolute inset-0 w-full h-full" />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-['Encode_Sans_Semi_Expanded:Bold'] text-[#00239c] text-[24px] leading-[24px]"
                  >
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <p
                    className="font-['Roboto:Bold'] font-bold text-[#00239c] text-[20px] leading-[24px] mb-2"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {step.title}
                  </p>
                  <p className="text-[#3a3a3a] text-[20px] leading-[21px]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYMENT SECTION ── */}
      <section
        className="w-full py-14"
        style={{ background: "linear-gradient(108.53deg, #00239c 29.357%, #001152 140.7%)" }}
      >
        <div className="max-w-[1328px] mx-auto px-8 flex flex-col gap-10">
          {/* header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-[991px]">
              <p className="text-[28px] leading-[42px] mb-2">
                <span
                  className="font-['Roboto:Bold'] font-bold text-white"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Paga tus cuotas desde{" "}
                </span>
                <span
                  className="font-['Roboto:Bold'] font-bold text-[#ffcc02]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  cualquier lugar
                </span>
              </p>
              <p
                className="font-['Roboto:Regular'] text-white text-[16px] leading-[22.5px]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Ya no necesitas hacer fila: paga tu cuota CrediOportunidad en línea con tu tarjeta, en segundos y con recibo digital al instante.
              </p>
            </div>
            <button className="shrink-0 bg-[#ffcc02] rounded-[24px] px-8 py-3 font-['Inter:Bold'] font-bold text-[#00239c] text-[14px] leading-[17px] whitespace-nowrap">
              Pagar mi cuota aquí
            </button>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {paymentMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-[25px] border border-[#e3e3e3] flex flex-col items-center gap-6 px-10 py-8 text-center text-white"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {method.icon}
                <div>
                  <p
                    className="font-['Roboto:Bold'] font-bold text-[18px] leading-[27px] mb-1"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {method.title}
                  </p>
                  <p
                    className="font-['Roboto:Regular'] text-[14px] leading-[21.7px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[16px] leading-[21.75px]">
            <span
              className="font-['Roboto:Bold'] font-bold text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              ¿Prefieres llamar?{" "}
            </span>
            <span
              className="font-['Roboto:Regular'] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Marca{" "}
            </span>
            <span
              className="font-['Roboto:Regular'] text-white underline"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              2507-3200
            </span>
            <span
              className="font-['Roboto:Regular'] text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {" "}y elige la opción 6.
            </span>
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="bg-white w-full py-16">
        <div className="max-w-[1328px] mx-auto px-8 flex flex-col gap-10">
          <div className="text-center">
            <p
              className="font-['Roboto:Bold'] font-bold text-[#001152] text-[36px] leading-[39.1px] mb-1"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Resolvamos tus dudas
            </p>
            <p className="font-['Inter:Regular'] text-black text-[20px] leading-normal">
              Revisa nuestro set de Preguntas Frecuentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6">
              {faqLeft.map((item) => (
                <FaqItem key={item.id} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {faqRight.map((item) => (
                <FaqItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BAR ── */}
      <section
        className="w-full py-10"
        style={{ background: "linear-gradient(133.75deg, #00239c 29.357%, #001152 140.7%)" }}
      >
        <div className="max-w-[1328px] mx-auto px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[991px]">
            <p className="text-[28px] leading-[42px] mb-2">
              <span
                className="font-['Roboto:Bold'] font-bold text-white"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                ¿Tenés alguna duda adicional? Habla con uno de{" "}
              </span>
              <span
                className="font-['Roboto:Bold'] font-bold text-[#ffcc02]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                nuestros asesores
              </span>
            </p>
            <p
              className="font-['Roboto:Regular'] text-white text-[16px] leading-[22.5px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Como en la tienda, pero por chat: un asesor real te acompaña desde la solicitud hasta tu primera cuota.
            </p>
          </div>
          <button className="shrink-0 bg-[#2fa84f] rounded-[24px] flex items-center gap-3 px-8 py-3 font-['Inter:Bold'] font-bold text-white text-[14px] leading-[17px]">
            <img alt="" src={imgVector} className="w-[19px] h-[19px]" />
            Chatear por Whatsapp
          </button>
        </div>
      </section>
    </div>
  );
}
