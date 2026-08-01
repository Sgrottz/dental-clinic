import primeiraConsulta from "../assets/images/primeira-consulta.png";
import limpezaPreventiva from "../assets/images/limpeza-preventiva.png";
import fluoracao from "../assets/images/fluoretação.png";
import ortodontia from "../assets/images/ortodontia-infatil.png";
import coroa from "../assets/images/coroa.png";
import cavidades from "../assets/images/cavidades.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import "swiper/css";
import "swiper/css/navigation";

import "../styles/menu.css";

function Menu() {

    useEffect(() => {
        ScrollReveal().reveal(".section-title, .section-subtitle", {
        origin: "left",
        duration: 2000,
        distance: "20%",
        });

        ScrollReveal().reveal(".service-carousel", {
            origin: "bottom",
            duration: 1200,
            distance: "10%",
        });
    }, []);

    const services = [
        {
            image: primeiraConsulta,
            title: "Primeira consulta",
            description: "Avaliação completa e orientação para os pais."
        },
        {
            image: limpezaPreventiva,
            title: "Limpeza preventiva",
            description: "Cuidados que protegem contra cáries."
        },
        {
            image: fluoracao,
            title: "Fluoretação",
            description: "Mais proteção para os dentinhos em crescimento."
        },
        {
            image: ortodontia,
            title: "Ortodontia infantil",
            description: "Acompanhamento do crescimento e alinhamento."
        },
        {
            image: coroa,
            title: "Tratamentos especiais",
            description: "Atendimento personalizado para cada criança."
        },
        {
            image: cavidades,
            title: "Urgências",
            description: "Estamos prontos para cuidar de você quando precisar."
        }
    ];


    return (
        <section id="menu">

            <h2 className="section-title">
                Tudo para um sorriso
            </h2>

            <h2 className="section-subtitle">
                saudável e feliz
            </h2>


            <Swiper
                className="services-carousel"
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                loop={true}
                slidesPerGroup={1}
                observer={TextTrackCueList}
                observeParents={true}
                navigation
                
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1200: {
                        slidesPerView: 3,
                    }
                }}
            >

            {services.map((service) => (

                <SwiperSlide key={service.title}>

                    <div className="service">

                        <img
                            src={service.image}
                            className="service-image"
                            alt={service.title}
                        />

                        <h3 className="service-title">
                            {service.title}
                        </h3>

                        <span className="service-description">
                            {service.description}
                        </span>

                    </div>

                </SwiperSlide>

            ))}

        </Swiper>

        </section>
    );
}

export default Menu;