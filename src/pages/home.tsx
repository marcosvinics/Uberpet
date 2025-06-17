import { useState } from 'react'
import Layout from '../components/layout.tsx'
import Navbar from '../components/Navbar.tsx'
import { GradientCanvas } from '../components/GradientCanvas.tsx'
import CarouselBootstrap from '../components/carouselBootstrap.tsx'
import QuemSomos from '../components/QuemSomos.tsx'
import ComoFunciona from '../components/ComoFunciona.tsx'
import Faq from '../components/Faq.tsx'
import Contato from '../components/Contato.tsx'
import Footer from '../components/Footer.tsx'
import ModalBootstrap from '../components/ModalBootstrap.tsx'

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
      </Layout>

      <Footer />

      <ModalBootstrap
        title="Cadastro de Motorista"
        show={showModalMotorista}
        onClose={closeModalMotorista}
      >
        <form className="bg-white bg-opacity-75 p-4 rounded shadow-sm">
          <div className="mb-3">
            <label htmlFor="nomeMotorista" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nomeMotorista" placeholder="Seu nome" />
          </div>

          <div className="mb-3">
            <label htmlFor="emailMotorista" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="emailMotorista" placeholder="email@exemplo.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="telefoneMotorista" className="form-label">Telefone</label>
            <input type="tel" className="form-control" id="telefoneMotorista" placeholder="(00) 00000-0000" />
          </div>

          <div className="mb-3">
            <label htmlFor="veiculoMotorista" className="form-label">Modelo do Veículo</label>
            <input type="text" className="form-control" id="veiculoMotorista" placeholder="Ex: Fiat Uno, Corolla" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Enviar Cadastro</button>
        </form>
      </ModalBootstrap>

      <ModalBootstrap
        title="Cadastro de Tutor"
        show={showModalTutor}
        onClose={closeModalTutor}
      >
        <form className="bg-white bg-opacity-75 p-4 rounded shadow-sm">
          <div className="mb-3">
            <label htmlFor="nomeTutor" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nomeTutor" placeholder="Seu nome" />
          </div>

          <div className="mb-3">
            <label htmlFor="emailTutor" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="emailTutor" placeholder="email@exemplo.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="telefoneTutor" className="form-label">Telefone</label>
            <input type="tel" className="form-control" id="telefoneTutor" placeholder="(00) 00000-0000" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Enviar Cadastro</button>
        </form>
      </ModalBootstrap>
    </div>
  )
}

export default Home
