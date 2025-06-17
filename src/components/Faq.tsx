const Faq = () => {
  return (
    <section className="my-5" style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 className="mb-4 text-center">F.A.Q</h2>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item shadow-sm mb-3 rounded">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Como garantir a segurança do meu pet durante o transporte?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-white bg-opacity-75 shadow-sm rounded">
              Garantimos motoristas treinados e veículos adaptados para o transporte seguro e confortável do seu pet, com acompanhamento constante durante todo o trajeto.
            </div>
          </div>
        </div>

        <div className="accordion-item shadow-sm mb-3 rounded">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Como faço para me tornar um motorista parceiro?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-white bg-opacity-75 shadow-sm rounded">
              Para se tornar um motorista parceiro, você deve se cadastrar, passar por um processo de avaliação e treinamento para garantir a qualidade do serviço.
            </div>
          </div>
        </div>

        <div className="accordion-item shadow-sm mb-3 rounded">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Quais formas de pagamento são aceitas?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body bg-white bg-opacity-75 shadow-sm rounded">
              Aceitamos cartões de crédito, débito, PIX e boleto bancário, tudo de forma segura e prática para você.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
