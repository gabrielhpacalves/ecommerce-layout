import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../componentes/Container";
import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

const ProdutoDetalhes = () => {
  const location = useLocation();
  const produto = location.state?.produto;

  const [tamanho, setTamanho] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagemSelecionada, setImagemSelecionada] = useState(produto?.imageUrl);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  // Simulando mais imagens (todas iguais por enquanto)
  const imagens = Array(4).fill(produto.imageUrl);

  return (
    <Container>
      <Wrapper>
        <BoxLeft>
          <ThumbnailContainer>
            {imagens.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setImagemSelecionada(img)}
                isSelected={imagemSelecionada === img}
              />
            ))}
          </ThumbnailContainer>
          <Imagem src={imagemSelecionada} alt={produto.nome} />
        </BoxLeft>

        <BoxRight>
          <NomeProduto>{produto.nome}</NomeProduto>
          <PrecoProduto>
            {`R$ ${(produto.preco * 0.9).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}{" "}
            <PrecoPix>no Pix</PrecoPix>
            <br />
            <Preco>
              ou{" "}
              {`R$ ${produto.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}{" "}
              em até 10x sem juros
            </Preco>
          </PrecoProduto>
          <Opcoes>
            <SelectWrapper>
              <CustomSelect
                value={tamanho}
                onChange={(e) => setTamanho(e.target.value)}
              >
                <option value="" disabled hidden>
                  Tamanho
                </option>
                {["PP", "P", "M", "G", "GG", "GGG"].map((tam) => (
                  <option key={tam} value={tam}>
                    {tam}
                  </option>
                ))}
              </CustomSelect>
              <ArrowIcon />
            </SelectWrapper>

            <SelectWrapper>
              <CustomSelect
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              >
                <option value="" disabled selected>
                  Qtde
                </option>
                {Array.from({ length: 15 }, (_, i) => i + 1).map((qtd) => (
                  <option key={qtd} value={qtd}>
                    {qtd}
                  </option>
                ))}
              </CustomSelect>
              <ArrowIcon />
            </SelectWrapper>
          </Opcoes>

          <BotaoAdicionar>ADICIONAR AO CARRINHO</BotaoAdicionar>
        </BoxRight>
      </Wrapper>
    </Container>
  );
};

// Styled-components
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
`;

const Box = styled.div`
  flex: 1;
  height: 100%;
`;

const BoxLeft = styled(Box)`
  display: flex;
  justify-content: flex-end; /* Alinha os itens à direita */
  gap: 10px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: ${(props) =>
    props.isSelected ? "2px solid #eee" : "2px solid transparent"};
  transition: border 0.2s ease-in-out;
`;

const Imagem = styled.img`
  max-width: 500px;
  object-fit: cover;
`;

const BoxRight = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NomeProduto = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  max-width: 500px;
`;

const PrecoProduto = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: black;
`;

const PrecoPix = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const Preco = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: gray;
`;

const Opcoes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 30%;
  margin-top: 20px;
`;

const CustomSelect = styled.select`
  width: 100%;
  min-width: 200px;
  padding: 1rem 3.3rem 0.7rem 1.5rem;
  font-size: 16px;
  border: 0.1rem solid #eee;
  background: white;
  appearance: none;
  cursor: pointer;
  color: gray; /* Cor padrão das opções */

  option[value=""] {
    color: #eee; /* Cor do placeholder */
  }
`;

const ArrowIcon = styled(AiOutlineDown)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #eee;
  pointer-events: none;
  font-size: 18px;
`;

const BotaoAdicionar = styled.button`
  background: #0a2240;
  padding: 20px 40px;
  color: white;
  width: 50%;
  min-width: 300px;
  margin-top: 20px;
  border: 0;
`;

const Optiontitle = styled.option`
  background: #0a2240;
  padding: 20px 40px;
  color: white;
  width: 50%;
  min-width: 300px;
  margin-top: 20px;
`;

export default ProdutoDetalhes;
