import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../componentes/Navbar";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Modal from "./ModalLogin";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Container = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user, "user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClickOpen = () => {
    document.getElementById("botaoClick").click();
  };

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <Modal />
      <CarrinhoItens $cartOpen={cartOpen}></CarrinhoItens>
      <Box>
        <Link to="/">
          <Logo src="/img/logo.png" alt="Logo" />
        </Link>
        <Navbar />
        {isLoggedIn ? (
          <CartIcon onClick={toggleCart} />
        ) : (
          <LoginIcon onClick={handleClickOpen} />
        )}
      </Box>
      <BotBar>
        <TextContainer>
          <span className="highlight">Chegou a Hora </span> 10% OFF adicional
          para pagamentos no Pix.{" "}
        </TextContainer>
      </BotBar>

      <Conteudo>{children}</Conteudo>

      <RodapeContainer>
      <SocialIcons>
          <IconLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </IconLink>
          <IconLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </IconLink>
          <IconLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </IconLink>
          <IconLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </IconLink>
        </SocialIcons>

        <Divider />

        <TextoRodape>
          PUMA SPORTS LTDA CNPJ 05.406.034/0028-14 Inscrição Estadual
          298.424.250.116 <br />
          Endereço: Rua Pasadena 104, Sala 106, Cond San Jose, Bairro Bosque
          Capuava, Embu das Artes - SP CEP: 06846-095
          <br />
          Atendimento ao Cliente: sac.brasil@br.puma.com | (11) 3003-4598 |
          Segundas às Sextas, das 8h às 18h
        </TextoRodape>
      </RodapeContainer>
    </Wrapper>
  );
};

// Styled-components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarrinhoItens = styled.div`
  position: fixed;
  height: 100vh;
  width: 300px;
  background: green;
  right: 0;
  z-index: 5;
  margin-top: 56px;
  transform: ${({ $cartOpen }) =>
    $cartOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const LoginIcon = styled(FaUser)`
  position: absolute;
  right: 50px;
  top: 15px;
  font-size: 24px;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const CartIcon = styled(FaCartShopping)`
  position: absolute;
  right: 50px;
  top: 15px;
  font-size: 24px;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px;
  z-index: 4;
  position: fixed;
  background: #fff;
`;

const Logo = styled.img`
  position: absolute;
  left: 50px;
  top: 15px;
  height: 80px;
`;

const BotBar = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  position: fixed;
  background-color: #0a2240;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 55px;
`;

const TextContainer = styled.div`
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .highlight {
    font-weight: bold;
    color: #fff;
    font-size: 16px;
  }

  .link {
    color: #fff;
    text-decoration: underline;
    font-weight: bold;
    margin-left: 5px;

    &:hover {
      color: #000;
    }
  }
`;

const Conteudo = styled.div`
  width: calc(100% - 100px);
  padding: 150px 40px;
  float: left;
`;

const RodapeContainer = styled.footer`
  text-align: center;
  color: white;
  padding: 20px;
  background-color: black;
`;

const TextoRodape = styled.p`
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 200px;
  height: 0.5px;
  background-color: white;
  margin: 0px auto;
  margin-bottom: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0px;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: gray;
  }
`;

export default Container;
