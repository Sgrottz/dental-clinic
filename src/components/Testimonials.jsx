import criancas from "../assets/images/crianças.jpg";
import avatar from "../assets/images/avatar.png";
import joao from "../assets/images/joao.jpg";

import "../styles/testimonials.css";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Testimonials() {

    useEffect(() => {
        ScrollReveal().reveal("#testimonial_img", {
            origin: "left",
            duration: 1000,
            distance: "20%",
        });

        ScrollReveal().reveal(".feedback", {
            origin: "right",
            duration: 1000,
            distance: "20%",
        });
    }, []);

    const feedbacks = [
        {
            image: avatar,
            name: "Fulana, mãe da Laura (7 anos)",
            text: "O consultório é lindo e totalmente adaptado. A primeira consulta da minha filha foi mágica, ela brincou o tempo todo e nem percebeu que estava sendo examinada. Nota mil!"
        },
        {
            image: joao,
            name: "João, pai da Sofia (3 anos)",
            text: "A melhor experiência que já tivemos! Meu filho tinha muito medo de dentista e hoje pede para voltar. O cuidado e a paciência da equipe são excepcionais. Recomendo de olhos fechados!"
        }
    ];

    return (
        <section id="testimonials">

            <img
                src={criancas}
                id="testimonial_img"
                alt="Crianças sorrindo"
            />

            <div id="testimonials_content">

                <h2 className="section-title">
                    Depoimentos
                </h2>

                <h3 className="section-subtitle">
                    O que os clientes falam sobre nós
                </h3>

                <div id="feedbacks">

                    {feedbacks.map((feedback) => (

                        <div className="feedback" key={feedback.name}>

                            <img
                                src={feedback.image}
                                className="feedback-avatar"
                                alt={feedback.name}
                            />

                            <div className="feedback-content">

                                <p>
                                    <strong>{feedback.name}</strong>

                                    <span>
                                        {[...Array(5)].map((_, index) => (
                                            <i key={index} className="fa-solid fa-star"></i>
                                        ))}

                                    </span>

                                </p>

                                <p>
                                    "{feedback.text}"
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

                <button className="btn-default">
                    Ver mais avaliações
                </button>

            </div>

        </section>
    );
}

export default Testimonials;