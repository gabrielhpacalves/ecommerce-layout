import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import departamento from "../itens/departamento";
import esporte from "../itens/esporte";
import marca from "../itens/marca";
import time from "../itens/time";

const Filtros = ({ onFiltrar }) => {
  const categorias = [
    {
      nome: "Departamento",
      itens: [...departamento],
    },
    {
      nome: "Esporte",
      itens: [...esporte],
    },
    {
      nome: "Marca",
      itens: [...marca],
    },
    {
      nome: "Time",
      itens: [...time],
    },
  ];

  const [expanded, setExpanded] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleCheckboxChange = (categoria, itemId) => {
    onFiltrar((prevFiltros) => {
      const filtroAtualizado = prevFiltros[categoria].includes(itemId)
        ? prevFiltros[categoria].filter((id) => id !== itemId)
        : [...prevFiltros[categoria], itemId];

      return { ...prevFiltros, [categoria]: filtroAtualizado };
    });
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
    <Container>
      {categorias.map((categoria, index) => (
        <CategoriaBox key={index}>
          <CategoriaHeader onClick={() => toggleExpand(index)}>
            <CategoriaTexto>{categoria.nome}</CategoriaTexto>
            <Seta>
              {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
            </Seta>
          </CategoriaHeader>
          {expanded === index && (
            <Itens>
              {categoria.itens.map((item) => (
                <Checkbox key={item.id}>
                  <input
                    type="checkbox"
                    id={`item-${index}-${item.id}`}
                    onChange={() =>
                      handleCheckboxChange(
                        categoria.nome.toLowerCase(),
                        item.id
                      )
                    }
                  />
                  <label htmlFor={`item-${index}-${item.id}`}>
                    {item.nome}
                  </label>
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
  position: ${({ isSticky }) => (isSticky ? "sticky" : "static")};
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
