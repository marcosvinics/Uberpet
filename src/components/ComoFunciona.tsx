interface ComoFuncionaProps {
  onOpenModalMotorista: () => void
  onOpenModalTutor: () => void
}

const ComoFunciona: React.FC<ComoFuncionaProps> = ({ onOpenModalMotorista, onOpenModalTutor }) => {
  return (
    <section id="como-funciona" className="container py-5">
      <h2 className="mb-4 text-center">Como Funciona</h2>
      <div className="row g-4 justify-content-center">
        <div
          className="col-12 col-md-5 col-lg-3 card p-4 shadow-sm border rounded"
          style={{ cursor: 'default' }}
        >
          <div className="d-flex justify-content-center mb-3">
          </div>
          <h5 className="card-title text-center">Agende online</h5>
          <p className="card-text text-center">
            Escolha a data e o horário para o transporte do seu pet em poucos cliques.
          </p>
        </div>

        <div
          className="col-12 col-md-5 col-lg-3 card p-4 shadow-sm border rounded"
          style={{ cursor: 'default' }}
        >
          <div className="d-flex justify-content-center mb-3">
          </div>
          <h5 className="card-title text-center">Motoristas treinados</h5>
          <p className="card-text text-center">
            Motoristas parceiros capacitados para transportar seu pet com segurança e carinho.
          </p>
        </div>

        <div
          className="col-12 col-md-5 col-lg-3 card p-4 shadow-sm border rounded"
          style={{ cursor: 'default' }}
        >
          <div className="d-flex justify-content-center mb-3">
          </div>
          <h5 className="card-title text-center">Acompanhe pelo app</h5>
          <p className="card-text text-center">
            Receba atualizações em tempo real sobre o transporte do seu pet.
          </p>
        </div>

        <div
          className="col-12 col-md-5 col-lg-3 card p-4 shadow-sm border rounded d-flex flex-column justify-content-between"
          style={{ cursor: 'pointer', transition: 'border-color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#6c63ff')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#dee2e6')}
        >
          <div className="d-flex justify-content-center mb-3">
          </div>
          <h5 className="card-title text-center">Seja um Motorista UberPET</h5>
          <p className="card-text text-center mb-3">
            Faça parte da nossa rede de motoristas parceiros e ganhe dinheiro cuidando de pets.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onOpenModalMotorista}
          >
            Cadastre-se
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary mt-2"
            onClick={onOpenModalTutor}
          >
            Cadastre-se como Tutor
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
