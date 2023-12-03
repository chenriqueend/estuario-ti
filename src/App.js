import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

/** Desenvolvido por Carlos Henrique alves
 * https://github.com/chenriqueend
 */

function App() {
  return (
    <div>
      <Hero />
      <div id="root"></div>
      <div id="modal-root"></div>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
