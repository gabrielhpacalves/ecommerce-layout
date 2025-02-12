import React, { useState } from "react";
import styled from "styled-components";
import Container from "../componentes/Container";
import Filtros from "../componentes/Filtros";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import produtos from "../itens/produtos";

const PageCorinthians = () => {
  const [pagina, setPagina] = useState(1);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null); // Estado para armazenar produto selecionado

  const produtosPorPagina = 16;
  const indexInicial = (pagina - 1) * produtosPorPagina;
  const produtosVisiveis = produtos.slice(
    indexInicial,
    indexInicial + produtosPorPagina
  );
  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

  const handleClickOpen = (produto) => {
    setProdutoSelecionado(produto);
  };

  return (
    <Container>
      <TituloPrincipal>
        Produtos e coleções exclusivas ({produtos.length})
      </TituloPrincipal>
      <Filtros />
      <ProdutosContainer>
        <BoxProdutos>
          {produtosVisiveis.map((produto, index) => (
            <Quadrado key={index} onClick={() => handleClickOpen(produto)}>
              <ProdutoImage imageUrl={produto.imageUrl} />
              <ProdutoNome>{produto.nome}</ProdutoNome>
              <ProdutoCategoria>{produto.categoria}</ProdutoCategoria>
              <ProdutoPreco>{produto.preco}</ProdutoPreco>
            </Quadrado>
          ))}
        </BoxProdutos>
      </ProdutosContainer>

      <Paginas>
        <PaginaBotao
          onClick={() => setPagina(pagina > 1 ? pagina - 1 : pagina)}
          disabled={pagina === 1}
        >
          <FaArrowLeft />
        </PaginaBotao>
        <PaginaInfo>
          {pagina} de {totalPaginas}
        </PaginaInfo>
        <PaginaBotao
          onClick={() => setPagina(pagina < totalPaginas ? pagina + 1 : pagina)}
          disabled={pagina === totalPaginas}
        >
          <FaArrowRight />
        </PaginaBotao>
      </Paginas>
    </Container>
  );
};

// Estilizações (mantidas as mesmas)
const ProdutosContainer = styled.div`
  width: calc(100% - 320px); 
  height: 80vh;
  overflow-y: auto; 
  padding-left: 20px;
  margin-top: 20px;
`;

const TituloPrincipal = styled.h2`
  text-align: left;
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin: 0px 0px 20px 0px;
  padding-left: 5px;
`;

const BoxProdutos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
  gap: 20px; /* Espaçamento entre os itens */
  padding-left: 20px;
  cursor: pointer;
`;

const Quadrado = styled.div`
  flex: 0 1 calc(25% - 20px);
  box-sizing: border-box;
`;

const ProdutoImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProdutoNome = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 4px 0;
`;

const ProdutoCategoria = styled.p`
  font-size: 17px;
  color: #777;
  margin: 10px 0;
`;

const ProdutoPreco = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #054f77;
  margin: 4px 0;
`;

const Paginas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: calc(100% - 320px);
  float: right;
`;

const PaginaBotao = styled.button`
  background-color: #054f77;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #043d5a;
  }
`;

const PaginaInfo = styled.p`
  font-size: 16px;
  color: #333;
`;

export default PageCorinthians;
