import React, { useState } from 'react'
import Layout from '../components/layout.tsx'
import Navbar from '../components/Navbar.tsx'
import { GradientCanvas } from '../components/GradientCanvas.tsx'
import CarouselBootstrap from '../components/carouselBootstrap.tsx'
import QuemSomos from '../components/QuemSomos.tsx'
import ComoFunciona from '../components/ComoFunciona.tsx'
import Faq from '../components/Faq.tsx'
import Contato from '../components/Contato.tsx'
import Footer from '../components/Footer.tsx' // importe o footer

const Home = () => {
  const [showModalMotorista, setShowModalMotorista] = useState(false)
  const [showModalTutor, setShowModalTutor] = useState(false)

  const openModalMotorista = () => setShowModalMotorista(true)
  const closeModalMotorista = () => setShowModalMotorista(false)

  const openModalTutor = () => setShowModalTutor(true)
  const closeModalTutor = () => setShowModalTutor(false)

  return (
    <div className="d-flex flex-column min-vh-100 position-relative w-100 overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <GradientCanvas />
      </div>

      <Navbar />

      <Layout className="position-relative flex-grow-1">
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

        <QuemSomos />

        <ComoFunciona
          onOpenModalMotorista={openModalMotorista}
          onOpenModalTutor={openModalTutor}
        />

        <Faq />

        <Contato />

        {/* Aqui você pode colocar os modais no futuro */}
        {/* {showModalMotorista && <ModalMotorista onClose={closeModalMotorista} />} */}
        {/* {showModalTutor && <ModalTutor onClose={closeModalTutor} />} */}
      </Layout>

      <Footer />
    </div>
  )
}

export default Home
