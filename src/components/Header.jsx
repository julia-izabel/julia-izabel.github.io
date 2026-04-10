function Header({ dark, alternarTema }) {
  return (
    <header>
      <h1>Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
          <li>
            <button id="btn-tema" onClick={alternarTema}>
              {dark ? "Claro" : "Escuro"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;