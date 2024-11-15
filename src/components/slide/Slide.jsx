import React, { useState, useEffect } from 'react';
import './Slide.scss';

// Importação das imagens
import imgNetflix from '../../assets/slide/netflix.png';
import imgApple from '../../assets/slide/apple.jpg';
import imgDisney from '../../assets/slide/disney.jpg';
import imgMax from '../../assets/slide/max.png';
import imgPrime from '../../assets/slide/prime.png';
import imgHulu from '../../assets/slide/hulu.webp'; // Nova imagem
import imgYouTube from '../../assets/slide/youtube.jpg'; // Nova imagem

const images = [
    { src: imgNetflix, alt: 'Netflix' },
    { src: imgApple, alt: 'Apple' },
    { src: imgDisney, alt: 'Disney' },
    { src: imgMax, alt: 'Max' },
    { src: imgPrime, alt: 'Prime' },
    { src: imgHulu, alt: 'Hulu' }, // Adicionando nova imagem
    { src: imgYouTube, alt: 'YouTube' }, // Adicionando nova imagem
];

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Muda a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <section className="container-slide">
            <div className="slide-images" style={{ transform: `translateX(-${currentIndex * 100 / images.length}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
                {/* Para criar o efeito contínuo, duplicamos as primeiras imagens */}
                {images.map((image, index) => (
                    <img key={`${index}-duplicate`} src={image.src} alt={image.alt} />
                ))}
            </div>
        </section>
    );
};

export default Slide;