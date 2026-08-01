import wave from "../assets/images/wave.svg";

import "../styles/footer.css";

function Footer() {

    return (

        <footer>

            <img src={wave} alt="" />

            <div id="footer_items">

                <span id="copyright">
                    © 2026 Arthur Sgrott
                </span>

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

        </footer>

    );

}

export default Footer;