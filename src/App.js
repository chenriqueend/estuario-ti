import React, { Component } from "react";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { InfoArea } from "./components/InfoArea.jsx";

/** Desenvolvido por Carlos Henrique alves
 * https://github.com/chenriqueend
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o estado para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode logar o erro para um serviço de relatórios de erro
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Hero />
        <div id="root" />
        <div id="modal-root" />
        <Services />
        <InfoArea />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
