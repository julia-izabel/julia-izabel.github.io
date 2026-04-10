import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function validarFormulario(e) {
    e.preventDefault();

    if (nome === "" || email === "" || msg === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
      alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
      setNome("");
      setEmail("");
      setMsg("");
    }
  }

  return (
    <section id="contato">
      <h2>Contato</h2>
      <form onSubmit={validarFormulario}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="msg">Mensagem:</label>
          <textarea
            id="msg"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contato;