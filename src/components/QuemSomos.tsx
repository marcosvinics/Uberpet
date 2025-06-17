const QuemSomos = () => {
  return (
    <section id="quem-somos" className="container py-5">
      <h2 className="text-center mb-5">Quem Somos</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Missão</h5>
              <p className="card-text">
                Conectar tutores de pets a motoristas treinados, garantindo uma experiência de transporte segura, prática e com carinho.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Visão</h5>
              <p className="card-text">
                Ser a principal plataforma de mobilidade pet do país, promovendo bem-estar animal com inovação e responsabilidade.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">Valores</h5>
              <p className="card-text">
                Amor pelos animais, segurança, transparência, inovação com propósito e compromisso com a qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuemSomos;