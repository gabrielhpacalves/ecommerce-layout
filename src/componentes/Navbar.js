import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <div>
      <Box>
        <Menu>
          <MenuItem>
            <a href="#">Lançamentos</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Ofertas</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Masculinos</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Feminino</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Infantil</a>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

// Styled-components
const Box = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FiltrosMenu = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
  heigth: 400px;
  z-index: 2;
  margin-top: 73px;
  left: 0;
`;

const Topo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-right: 30px; /* Espaço entre os itens */

  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #000;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default Navbar;
