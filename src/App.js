import React from "react";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { InfoArea } from "./components/InfoArea.jsx";

/** Desenvolvido por Carlos Henrique alves
 * https://github.com/chenriqueend
 */

function App() {
  return (
    <div>
      <Hero />
      <div id="root"></div>
      <div id="modal-root"></div>
      <Services />
      <InfoArea />
      <Footer />
    </div>
  );
}

export default App;
