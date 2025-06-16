import Layout from '../components/layout.tsx'
import Navbar from '../components/Navbar.tsx'
import { GradientCanvas } from '../components/GradientCanvas.tsx'
import CarouselBootstrap from '../components/carouselBootstrap.tsx'

const Home = () => {
  return (
    <div className="position-relative min-vh-100 w-100 overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <GradientCanvas />
      </div>

      <Navbar />

      <Layout className="position-relative">
        <section
          className="min-vh-75 row align-items-start gx-4 gy-4"
          style={{ paddingTop: '6rem' }} 
        >
          <div className="col-12 col-md-6 position-relative">
            <h1 className="display-4 fw-bold text-white" style={{ mixBlendMode: 'difference' }}>
              Transporte seguro e confortável para o seu pet
            </h1>
            <p className="fs-5 text-white mt-3" style={{ mixBlendMode: 'difference' }}>
              Conecte-se com motoristas especializados e leve seu pet com carinho e segurança aonde for necessário.
            </p>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <CarouselBootstrap />
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Home;
