const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 border-top border-secondary position-relative w-100 mt-auto">
      <div className="container text-center">
        <img
          //src={logo}
          alt="Logo UberPET"
          style={{ height: '40px', marginBottom: '0.5rem' }}
        />
        <p className="mb-0">&copy; {new Date().getFullYear()} UberPET. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
