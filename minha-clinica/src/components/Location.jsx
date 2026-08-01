import "../styles/location.css";

function Location() {
    return (
        <section id="location">

            <h2 className="section-title">
                Nossa localização
            </h2>

            <h3 className="section-subtitle">
                Venha nos visitar
            </h3>

            <div className="map-container">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.792495466981!2d-48.519414299999994!3d-27.5999622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739ab06a8bca7%3A0x9904bca1385e0f9d!2sUFSC!5e0!3m2!1spt-PT!2sbr!4v1785477311195!5m2!1spt-PT!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Mapa da clínica"
                ></iframe>

            </div>

        </section>
    );
}

export default Location;