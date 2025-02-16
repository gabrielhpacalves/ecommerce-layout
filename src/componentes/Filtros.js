import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Filtros = () => {
  const categorias = [
    {
      nome: "Preço",
      itens: ["Até R$ 100", "R$ 100 - R$ 200", "R$ 200 - R$ 300", "R$ 400 - R$ 500", "Acima de R$ 500"],
    },
    {
      nome: "Tamanho",
      itens: ["PP", "P", "M", "G", "GG", "GGG"],
    },
    {
      nome: "Esportes",
      itens: ["Futebol", "Basquete"],
    },
    {
      nome: "Tecnologia",
      itens: ["Nike Air", "Nike Zoom"],
    },
    {
      nome: "Tipo de Produto",
      itens: ["Calçados", "Roupas", "Calçados"],
    },
    {
      nome: "Tecidos",
      itens: ["Algodão", "Poliéster"],
    },
    {
      nome: "Gênero",
      itens: ["Masculino", "Feminino", "Unissex"],
    },
  ];

  const [expanded, setExpanded] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 100); // Fixa o componente após rolar 100px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isSticky={isSticky}>
      {categorias.map((categoria, index) => (
        <CategoriaBox key={index}>
          <CategoriaHeader onClick={() => toggleExpand(index)}>
            <CategoriaTexto>{categoria.nome}</CategoriaTexto>
            <Seta>{expanded === index ? <FaChevronUp /> : <FaChevronDown />}</Seta>
          </CategoriaHeader>
          {expanded === index && (
            <Itens>
              {categoria.itens.map((item, itemIndex) => (
                <Checkbox key={itemIndex}>
                  <input type="checkbox" id={`item-${index}-${itemIndex}`} />
                  <label htmlFor={`item-${index}-${itemIndex}`}>{item}</label>
                </Checkbox>
              ))}
            </Itens>
          )}
        </CategoriaBox>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  float: left;
  position: ${({ isSticky }) => (isSticky ? "sticky" : "static")}; /* Fixa quando rolar */
  top: 0;
  z-index: 10;
`;

const CategoriaBox = styled.div`
  border-top: 1px solid #ccc;
  overflow: hidden;
  padding: 10px 0;
`;

const CategoriaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

const CategoriaTexto = styled.span`
  font-size: 16px;
  color: #333;
`;

const Seta = styled.span`
  font-size: 16px;
  color: #0a2240;
`;

const Itens = styled.div`
  margin-top: 10px;
  padding-left: 10px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  input {
    margin-right: 8px;
    width: 15px;
    height: 15px;
  }

  label {
    font-size: 15px;
  }
`;

export default Filtros;
