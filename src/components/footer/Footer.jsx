
import './Footer.scss';

const Footer = () => {
    return (
        <footer class="footer">
            <section class="footer-social">
                <div class="footer-social-container">
                <span>Conecte as nossas redes sociais:</span>
                </div>
                <div class="footer-social-links">
                <a href="">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="">
                    <i class="fab fa-google"></i>
                </a>
                <a href="">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="">
                    <i class="fab fa-github"></i>
                </a>
                </div>
            </section>

            <section class="footer-links">
                <div class="footer-links-container">
                <div class="footer-about">
                    <h6>MOVIEDB</h6>
                    <p>
                    Aqui você encontra os melhores filmes para assistir!
                    </p>
                </div>

                <div class="footer-products">
                    <h6>Classificações</h6>
                    <p><a href="#">Ação</a></p>
                    <p><a href="#">Aventura</a></p>
                    <p><a href="#">Terror</a></p>
                    <p><a href="#">Infantil</a></p>
                </div>

                <div class="footer-useful-links">
                    <h6>Rede Sociais</h6>
                    <p><a href="#">Instagram</a></p>
                    <p><a href="#">X</a></p>
                    <p><a href="#">Facebook</a></p>
                    <p><a href="#">LinkedIn</a></p>
                </div>

                <div class="footer-contact">
                    <h6>Contato</h6>
                    <p>New York, NY 10012, US</p>
                    <p>info@example.com</p>
                    <p>+ 01 234 567 88</p>
                    <p>+ 01 234 567 89</p>
                </div>
                </div>
            </section>

            <div class="footer-copyright">
                © 2024 Copyright:
                <a href="https://jonatasmoreira.com"> jonatasmoreira.com</a>
            </div>
        </footer>
    )
}

export default Footer