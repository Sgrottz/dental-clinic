import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import "../styles/contact.css";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Contact() {

    useEffect(() => {
        ScrollReveal().reveal("#contact_info", {
            origin: "left",
            duration: 1000,
            distance: "20%",
        });

        ScrollReveal().reveal("#contact_form", {
            origin: "right",
            duration: 1000,
            distance: "20%",
        });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.init({
            publicKey: "aPDuC2qL_oy-Zjmwh",
        });


        try {
            await emailjs.send(
                "service_nsc6yb9",
                "template_6refqwq",
                formData
            );

            toast.success("E-mail enviado com sucesso!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {

            toast.error("Erro ao enviar o e-mail!");

            console.error("EmailJS:", error);

        } finally {

            setLoading(false);

        }
    };

    const [loading, setLoading] = useState(false);

    return (
        <section id="contact">

            <div id="contact_info">

                <h2>Entre em contato</h2>

                <p>
                    Será um prazer cuidar do sorriso do seu pequeno.
                </p>

                <div className="info-item">
                    <i className="fa-solid fa-phone"></i>
                    <span>(48) 99180-1450</span>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-envelope"></i>
                    <span>contato@clinica.com.br</span>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Florianópolis - SC</span>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-clock"></i>
                    <span>Segunda a Sexta • 08h às 18h</span>
                </div>

                <a
                    href="https://wa.me/5548991801450"
                    className="btn-whatsapp"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                    Falar pelo WhatsApp
                </a>

            </div>

            <form id="contact_form" onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                            value={formData.email}
                            onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="subject">Assunto</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button
                    className="btn-default"
                    id="submit_button"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                </button>

            </form>

        </section>
    );
}

export default Contact;