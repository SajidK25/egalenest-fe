import React from "react";
import Header from "./layouts/Header";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbarResponsive"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <About />
        <Portfolio />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
