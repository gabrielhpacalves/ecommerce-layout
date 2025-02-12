import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../componentes/Navbar";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Modal from "./ModalLogin";

const Container = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user,'user');
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
        <Logo src="/img/logo_nike.png" alt="Logo" />
        <Navbar />
        {isLoggedIn ? <CartIcon onClick={toggleCart} /> : <LoginIcon onClick={handleClickOpen} />}
      </Box>
      <BotBar>
        <TextContainer>
          <img
            src="https://imgnike-a.akamaihd.net/strapi/nike/shopping_cart_37449db063/shopping_cart_37449db063.png"
            alt="Ícone"
            className="icon"
          />
          <span className="highlight">Chegou a Hora </span> 10% OFF adicional para pagamentos no Pix.{" "}
          <a href="/produtos" className="link">
            Ver Produtos
          </a>
        </TextContainer>
      </BotBar>
      <Conteudo>{children}</Conteudo>
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
  transform: ${({ $cartOpen }) => ($cartOpen ? "translateX(0)" : "translateX(100%)")};
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
  height: 24px;
`;

const BotBar = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  background-color: #f4f4f4;
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

  .icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .highlight {
    font-weight: bold;
    color: #333;
    font-size: 16px;
  }

  .link {
    color: #000;
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
  padding: 50px;
  float: left;
`;

export default Container;
