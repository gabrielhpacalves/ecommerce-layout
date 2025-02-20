import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo de transição (3 segundos)
  };

  return (
    <CarrosselContainer>
      <Slider {...settings}>
        <ImagemCarrossel src="/img/banner-1.png" alt="Imagem 1" />
        <ImagemCarrossel src="/img/banner-futebol.png" alt="Imagem 2" />
        <ImagemCarrossel src="/img/banner-nba.png" alt="Imagem 3" />
        <ImagemCarrossel src="/img/banner-nfl.png" alt="Imagem 4" />
      </Slider>
    </CarrosselContainer>
  );
};

const CarrosselContainer = styled.div`
  width: 100%;
  margin: 0 0 30px 10px;
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const ImagemCarrossel = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default Carrossel;
