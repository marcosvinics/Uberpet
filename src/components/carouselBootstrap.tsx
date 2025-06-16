import { useEffect } from 'react'

const CarouselBootstrap = () => {
  useEffect(() => {
    import('bootstrap')
  }, [])

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade rounded-4 overflow-hidden shadow"
      data-bs-ride="carousel"
      style={{ maxWidth: '400px', width: '100%' }}
    >
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>

      {/* Slides */}
      <div className="carousel-inner" style={{ height: '400px' }}>
        <div className="carousel-item active h-100">
          <img
            src="/image1.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Slide 1"
          />
          <div className="carousel-caption d-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="text-white">Conforto e Segurança</h5>
            <p className="text-white">Leve seu pet com quem entende do assunto.</p>
          </div>
        </div>

        <div className="carousel-item h-100">
          <img
            src="/image2.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Slide 2"
          />
          <div className="carousel-caption d-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="text-white">Motoristas Especializados</h5>
            <p className="text-white">Profissionais preparados para transportar com carinho.</p>
          </div>
        </div>

        <div className="carousel-item h-100">
          <img
            src="/image3.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="Slide 3"
          />
          <div className="carousel-caption d-block bg-dark bg-opacity-50 rounded p-3">
            <h5 className="text-white">Para Todas as Raças e Tamanhos</h5>
            <p className="text-white">Nos adaptamos ao perfil do seu pet.</p>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  )
}

export default CarouselBootstrap
