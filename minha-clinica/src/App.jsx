import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";

import "./styles/style.css";

function App() {
  return (
    <>
      <Header />

      <main id="content">
        <Hero />
        <Menu />
        <Testimonials />
        <Contact />
        <Location />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
    </>
  );
}

export default App;