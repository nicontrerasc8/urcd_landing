import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Un ratito con Dios</title>
        <meta name="description" content="Una aplicación católica para fortalecer tu vida espiritual." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-[#e8f7f8] text-[#0075ac] py-4 animate-fadeInDown">
        <nav className="container mx-auto flex items-center justify-center">
          <Image src="/logo.png" alt="Logo Un Ratito con Dios" width={40} height={40} className="mr-2" />
          <h1 className="text-2xl font-bold">Un Ratito con Dios</h1>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-4">
        {/* Welcome Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl font-bold text-[#0075ac] transition-opacity duration-700 opacity-0 animate-fadeIn">
            Conecta con Dios todos los días
          </h1>
          <p className="mt-6 text-xl text-gray-700 transition-opacity duration-1000 opacity-0 animate-fadeIn max-w-3xl mx-auto">
            Sumérgete en un espacio lleno de paz y conexión espiritual. &quot;Un ratito con Dios&quot; es tu acompañante perfecto para fortalecer tu fe, alimentar tu alma y encontrar la tranquilidad que necesitas cada día. Descubre oraciones, reflexiones y herramientas para vivir una vida espiritual más profunda y significativa.
          </p>
        </section>

        {/* Mockups Section */}
        <section className="bg-[#e8f7f8] py-16">
          <h2 className="text-4xl font-bold text-center text-[#0075ac] mb-12">Explora la Aplicación</h2>
          <div className="max-w-6xl mx-auto flex flex-col gap-12 px-4">
            {/* Mockup 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-md">
              <Image
                src="/1-portrait.png"
                alt="Devocionario Online"
                width={250}
                height={500}
                className="rounded-md mb-6 md:mb-0"
              />
              <div className="md:ml-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#0075ac]">Ora en cualquier lugar a través del Devocionario</h3>
                <p className="text-lg text-gray-700 mt-4">
                  Sumérgete en una rica variedad de oraciones diseñadas para acompañarte en cada momento del día. Encuentra palabras de consuelo, gratitud y reflexión que llenarán de paz tu corazón.
                </p>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-md">
              <Image
                src="/2-portrait.png"
                alt="Fortalece tu vida espiritual"
                width={250}
                height={500}
                className="rounded-md mb-6 md:mb-0"
              />
              <div className="md:ml-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#0075ac]">Eleva Tu Espíritu Cada Día</h3>
                <p className="text-lg text-gray-700 mt-4">
                  Reflexiona cada día con el examen de conciencia y documenta tu crecimiento espiritual. Descubre cómo Dios trabaja en tu vida a través de un diario que nutre tu fe y te impulsa a ser la mejor versión de ti mismo.
                </p>
              </div>
            </div>

            {/* Mockup 3 */}
            <div className="flex flex-col md:flex-row items-center bg-white p-10 rounded-lg shadow-md">
              <Image
                src="/3-portrait.png"
                alt="Curso de Biblia"
                width={250}
                height={500}
                className="rounded-md mb-6 md:mb-0"
              />
              <div className="md:ml-8 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#0075ac]">Descubre la Sabiduría de las Escrituras</h3>
                <p className="text-lg text-gray-700 mt-4">
                  Adéntrate en la Palabra de Dios con un curso bíblico estructurado. Aprende sobre las Escrituras, profundiza en sus enseñanzas y descubre el camino que Dios ha trazado para ti.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
       {/*  <section className="bg-[#e8f7f8] py-16 mt-10">
          <h2 className="text-3xl font-bold text-center text-[#0075ac] mb-8">Testimonios de Nuestros Usuarios</h2>
          <div className="max-w-6xl mx-auto flex flex-col gap-8 px-4">

            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 italic mb-4">&quot;Un ratito con Dios ha cambiado mi vida diaria. Ahora encuentro paz cada día con solo unos minutos de reflexión.&quot;</p>
              <h3 className="text-lg font-semibold text-[#0075ac]">- María López</h3>
              <p className="text-sm text-gray-500">Lima, Perú</p>
            </div>

                 <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 italic mb-4">&quot;Es maravilloso cómo una aplicación puede ayudarte a crecer espiritualmente. La uso todas las mañanas.&quot;</p>
              <h3 className="text-lg font-semibold text-[#0075ac]">- Juan Pérez</h3>
              <p className="text-sm text-gray-500">Cusco, Perú</p>
            </div>

    
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105">
              <p className="text-gray-600 italic mb-4">&quot;Me encanta esta app. Me ha ayudado a enfocarme y a tener un momento de paz en mi vida agitada.&quot;</p>
              <h3 className="text-lg font-semibold text-[#0075ac]">- Ana García</h3>
              <p className="text-sm text-gray-500">Arequipa, Perú</p>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-[#e8f7f8] text-[#0075ac] text-center py-16 mt-12 w-full animate-fadeInUp">
          <h2 className="text-3xl font-bold">Descarga la App Ahora</h2>
          <p className="mt-4">Disponible en la App Store y Google Play.</p>
          <div className="flex max-md:flex-col items-center justify-center mt-6 space-x-4">
            <a
              href="https://apps.apple.com/pe/app/un-ratito-con-dios/id6698850815"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <Image src="/appstore.svg" alt="App Store" width={150} height={48} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nicontrerasc8.urcd&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <Image src="/google-play.png" alt="Google Play" width={200} height={48} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#e8f7f8] text-center py-4 mt-16 transition-opacity duration-1000 opacity-0 animate-fadeIn">
        <p className="text-gray-600">© {new Date().getFullYear()} Un ratito con Dios. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
