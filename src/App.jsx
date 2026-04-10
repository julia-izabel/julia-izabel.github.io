import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("tema") === "dark";
  });

  // aplica o tema
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("tema", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("tema", "light");
    }
  }, [dark]);

  function alternarTema() {
    setDark(!dark);
  }

  return (
    <>
      <Header dark={dark} alternarTema={alternarTema} />
      <main>
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;