function Projetos() {
  const projetos = [
    {
      titulo: "Projeto 01 - Portfólio",
      descricao: "Meu portfólio de apresentação feito com tecnologias modernas.",
      link: "https://github.com/julia-izabel/j-portfolio.git"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projetos-container">
        {projetos.map((p, i) => (
          <article className="card-projeto" key={i}>
            <h3>{p.titulo}</h3>
            <p>{p.descricao}</p>
            <a href={p.link} target="_blank">Ver no GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projetos;