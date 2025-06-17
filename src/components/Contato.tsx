import React from 'react'

const Contato = () => {
  return (
    <section className="my-5" style={{ maxWidth: 800, margin: '0 auto' }}>
      <h2 className="mb-4 text-center">Fale Conosco</h2>

      <form className="bg-white bg-opacity-75 p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Endereço de e-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="nome@exemplo.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputMensagem" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="inputMensagem"
            rows={4}
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contato
