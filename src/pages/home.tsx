import Layout from '../components/layout'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
      </div>

      <Navbar />

      {/* Conteúdo principal */}
      <Layout className="relative z-10">
        <section className="pt-[80px] min-h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texto à esquerda */}
          <div className="relative space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mix-blend-difference">
              Transporte seguro e confortável para o seu pet
            </h1>

            <p className="text-lg text-white mix-blend-difference">
              Conecte-se com motoristas especializados e leve seu pet com carinho e segurança aonde for necessário.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home