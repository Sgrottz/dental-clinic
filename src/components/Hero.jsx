import banner from "../assets/images/banner.png";
import "../styles/home.css";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Hero() {

  useEffect(() => {
    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: "20%",
      });

      ScrollReveal().reveal("#banner", {
        origin: "right",
        duration: 2000,
        distance: "20%",
      });
  }, []);

  return (
    <main id="content">
      <section id="home">

        <div className="shape"></div>

        <div id="cta">

          <h1 className="title">
            Cuidando da saúde do seu{" "}
            <span>pequeno</span>
          </h1>

          <p className="description">
            Criando o hábito de cuidar dos dentes de forma leve e divertida.
          </p>


          <div id="cta_buttons">

            <a href="#contact" className="btn-default">
              Agende uma consulta
            </a>


            <a href="tel:+5548991801450" id="phone_button">

              <button className="btn-default">
                <i className="fa-solid fa-phone"></i>
              </button>

              (48) 99180-1450

            </a>

          </div>


          <div className="social-media-buttons">

            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>

          </div>

        </div>


        <div id="banner">

          <img 
            src={banner}
            alt="Imagem principal da clínica"
            className="banner"
          />

        </div>

      </section>
    </main>
  );
}

export default Hero;