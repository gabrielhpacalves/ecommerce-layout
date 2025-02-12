import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Container from "../componentes/Container";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const boxIconesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Torna visível quando entrar na tela
        } else {
          setIsVisible(false); // Se sair da tela, volta ao estado inicial
        }
      },
      {
        threshold: 0.5, // A visibilidade de 50% da área do elemento ativa o efeito
      }
    );

    if (boxIconesRef.current) {
      observer.observe(boxIconesRef.current);
    }

    return () => {
      if (boxIconesRef.current) {
        observer.unobserve(boxIconesRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <BoxBanner>
        <Banner src="/img/justdoit.png" alt="Banner" />
      </BoxBanner>

      <TituloPrincipal>Destaques</TituloPrincipal>
      <BoxCategorias>
        <Link to="/Corinthians">
          <Categoria wallpaper="/img/corinthiansFundo.jpg" title="Corinthians">
            <Foto src="/img/wCorinthians.png" alt="Banner" />
          </Categoria>
        </Link>

        <Categoria wallpaper="/img/nbaFundo.jpg" title="NBA">
          <Foto src="/img/wNBA.png" alt="Banner" />
        </Categoria>
        <Categoria wallpaper="/img/nflFundo.jpg" title="NFL">
          <Foto src="/img/wNFL.png" alt="Banner" />
        </Categoria>

        <Categoria wallpaper="/img/runningfundo.jpeg" title="Running">
          <Foto src="/img/wRunning.png" alt="Banner" />
        </Categoria>
        <Categoria wallpaper="/img/tennisFundo.jpeg" title="Tennis">
          <Foto src="/img/wTennis.png" alt="Banner" />
        </Categoria>
        <Categoria wallpaper="/img/futebolFundo.jpg" title="Futebol">
          <Foto src="/img/wFutebol.png" alt="Banner" />
        </Categoria>
      </BoxCategorias>

      <TituloPrincipal>Ícones Nike</TituloPrincipal>

      <BoxIconesNike ref={boxIconesRef} className={isVisible ? "visible" : ""}>
        <Icone imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/big-3-air-force-1-desk-v3.jpg" />
        <Icone imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/big-3-dunk-desk-v3.jpg" />
        <Icone imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/big-3-air-jordan-1-desk-v3.jpg" />
        <Icone imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/touts/big-3-airmax-desk-v3.jpg" />
      </BoxIconesNike>

      <TituloPrincipal>Conheça também</TituloPrincipal>

      <BoxVertical>
        <ImagemVertical imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/conheca-tambem/CARROSSEL_A-v4.jpg" />
        <ImagemVertical imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/conheca-tambem/cartao-presente-B.jpg" />
        <ImagemVertical imageUrl="https://imgnike-a.akamaihd.net/branding/home-sbf/conheca-tambem/CARROSSEL_C-V2.jpg" />
      </BoxVertical>
    </Container>
  );
};

// Definindo a animação com keyframes
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);  /* Começa fora da tela à esquerda */
  }
  100% {
    transform: translateX(0);  /* Chega à posição original */
  }
`;

const zoomIn = keyframes`
  0% {
    opacity: 0;         /* A imagem começa invisível */
    transform: scale(0.8); /* A imagem começa menor */
  }
  100% {
    opacity: 1;         /* A imagem se torna visível */
    transform: scale(1); /* A imagem chega ao seu tamanho normal */
  }
`;

const BoxCategorias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;

const Titulo = styled.a`
  font-family: "Arimo", sans-serif;
  font-weight: bolder;
  font-size: 60px;
  color: #fff;
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(
    -50%,
    -50%
  ); /* Ajusta para centralizar com base no ponto médio */
  text-align: center; /* Garante centralização de texto multi-linhas */
  opacity: 0; /* Começa invisível */
  transition: opacity 0.3s ease; /* Suaviza a transição da visibilidade */
  z-index: 2; /* Garante que o título fique acima da imagem */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adiciona uma sombra leve ao texto */
`;

const Categoria = styled.div`
  height: 250px;
  position: relative;
  padding-top: 10px;
  background: ${({ wallpaper }) => `url(${wallpaper})` || "pink"};
  background-size: cover;
  background-position: center;
  animation: ${zoomIn} 1.5s ease-out forwards;
  overflow: hidden; /* Garante que o conteúdo extra seja cortado */
  transition: filter 0.3s ease; /* Suaviza a transição para colorido */

  &:hover ${Titulo} {
    opacity: 1; /* O título se torna visível */
  }
`;

const BoxBanner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  padding: 0px 0px 20px 0px;
  animation: ${slideIn} 2s ease-out forwards; /* Aplica a animação */
`;

const Banner = styled.img`
  width: 600px;
  height: auto; /* Mantém a proporção da imagem */
`;

const Foto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease; /* Suaviza a transição de escala */
  transform-origin: center; /* Define o ponto de origem do zoom no centro */
  position: relative; /* Para garantir que ela esteja abaixo do título */
  z-index: 1; /* Mantém a imagem atrás do título */

  &:hover {
    transform: scale(1.1); /* Aumenta o tamanho da imagem em 10% */
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%); /* Começa fora da tela à esquerda */
  }
  100% {
    transform: translateX(0); /* Chega à posição original */
  }
`;

const BoxIconesNike = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 colunas proporcionais */
  gap: 10px;
  width: 100%;
  padding: 10px;
  opacity: 0; /* Inicialmente invisível */
  transition: opacity 0.3s ease;

  /* Condiciona a animação para ocorrer apenas quando visível */
  animation: ${({ isVisible }) =>
    isVisible
      ? `${slideInFromLeft} 1s forwards`
      : "none"}; /* Aplica a animação só se for visível */

  &.visible {
    opacity: 1; /* Tornar visível quando a classe 'visible' for adicionada */
  }
`;

const Icone = styled.div`
  background-image: url(${({ imageUrl }) =>
    imageUrl}); /* URL da imagem passada como prop */
  background-size: cover; /* Ajusta a imagem para cobrir todo o quadrado */
  background-position: center; /* Centraliza a imagem */
  height: 0;
  padding-bottom: 100%; /* Mantém a proporção do quadrado */
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para os quadrados */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Aumenta o quadrado no hover */
  }
`;

const TituloPrincipal = styled.h2`
  text-align: left; /* Alinha o título ao centro */
  font-size: 36px; /* Tamanho do título */
  font-weight: bold;
  color: #333; /* Cor do título */
  margin: 30px 0px; /* Espaço entre o título e a grade */
  padding-left: 5px;
`;

const BoxVertical = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de largura proporcional */
  gap: 10px; /* Espaço entre as imagens */
  width: 100%;
  padding: 10px;
`;

const ImagemVertical = styled.div`
  background-image: url(${({ imageUrl }) =>
    imageUrl}); /* URL da imagem passada como prop */
  background-size: cover; /* Ajusta a imagem para cobrir o quadrado */
  background-position: center; /* Centraliza a imagem */
  position: relative;
  overflow: hidden;
  border-radius: 5px; /* Borda arredondada opcional */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para a imagem */
  transition: transform 0.3s ease;
  padding-bottom: 150%; /* A altura será 1,5x a largura, criando um efeito mais vertical */

  &:hover {
    transform: scale(1.05); /* Aumenta a imagem no hover */
  }
`;

export default Home;
