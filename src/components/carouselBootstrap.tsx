export default function CarouselBootstrap() {
  const html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <style>
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden;
          background-color: #fff;
        }
        #carouselExampleCaptions {
          width: 100%;
          height: 100%;
        }
        .carousel-inner, .carousel-item, .carousel-item img {
          height: 100%;
        }
        .carousel-item img {
          object-fit: cover;
        }
        .carousel-caption {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 1rem;
          border-radius: 0.5rem;
        }
        .carousel-caption h5,
        .carousel-caption p {
          color: #fff;
        }
      </style>
    </head>
    <body>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./image1.png" class="d-block w-100" alt="Slide 1" />
            <div class="carousel-caption d-block">
              <h5>Conforto e Segurança</h5>
              <p>Leve seu pet com quem entende do assunto.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/image2.png" class="d-block w-100" alt="Slide 2" />
            <div class="carousel-caption d-block">
              <h5>Motoristas Especializados</h5>
              <p>Profissionais preparados para transportar com carinho.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./image3.png" class="d-block w-100" alt="Slide 3" />
            <div class="carousel-caption d-block">
              <h5>Para Todas as Raças e Tamanhos</h5>
              <p>Nos adaptamos ao perfil do seu pet.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
  </html>
  `;

  return (
    <div className="w-full max-w-[400px] mx-auto aspect-square">
      <iframe
        srcDoc={html}
        className="w-full h-full rounded-xl"
        style={{
          border: 'none',
          overflow: 'hidden',
        }}
        title="Carousel Bootstrap com legendas"
        scrolling="no"
      />
    </div>
  );
}
