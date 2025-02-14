const produtos = [
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-i-2425-sn-torcedor-nike-masculina/28/JD8-6758-028/JD8-6758-028_zoom1.jpg?ts=1715694444&ims=326x",
    nome: "Camisa Corinthians I 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2425-sn-torcedor-nike-masculina/28/JD8-7872-028/JD8-7872-028_zoom1.jpg?ts=1725273727&ims=1088x",
    nome: "Camisa Corinthians III 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-iii-2425-nike-masculina/06/JD8-7875-006/JD8-7875-006_zoom1.jpg?ts=1729706316&ims=1088x",
    nome: "Jaqueta Corinthians III 24/25 Nike Masculina - Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 599.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-2425-hino-nike-feminina/28/JD8-7048-028/JD8-7048-028_zoom1.jpg?ts=1718098747&ims=1088x",
    nome: "Jaqueta Corinthians 24/25 Hino Nike Feminina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 360.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/corta-vento-corinthians-2425-nike-masculino/01/JD8-8171-401/JD8-8171-401_zoom1.jpg?ts=1728583357&ims=1088x",
    nome: "Corta Vento Corinthians 24/25 Nike Masculino - Marrom",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 759.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2324-sn-torcedor-nike-masculina/20/JD8-3972-120/JD8-3972-120_zoom1.jpg?ts=1701710516&ims=1088x",
    nome: "Camisa Corinthians III 23/24 s/n° Torcedor Nike Masculina - Preto+Dourado",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 284.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-i-2425-sn-torcedor-nike-masculina/28/JD8-6758-028/JD8-6758-028_zoom1.jpg?ts=1715694444&ims=326x",
    nome: "Camisa Corinthians I 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2425-sn-torcedor-nike-masculina/28/JD8-7872-028/JD8-7872-028_zoom1.jpg?ts=1725273727&ims=1088x",
    nome: "Camisa Corinthians III 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-iii-2425-nike-masculina/06/JD8-7875-006/JD8-7875-006_zoom1.jpg?ts=1729706316&ims=1088x",
    nome: "Jaqueta Corinthians III 24/25 Nike Masculina - Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 599.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-2425-hino-nike-feminina/28/JD8-7048-028/JD8-7048-028_zoom1.jpg?ts=1718098747&ims=1088x",
    nome: "Jaqueta Corinthians 24/25 Hino Nike Feminina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/corta-vento-corinthians-2425-nike-masculino/01/JD8-8171-401/JD8-8171-401_zoom1.jpg?ts=1728583357&ims=1088x",
    nome: "Corta Vento Corinthians 24/25 Nike Masculino - Marrom",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 759.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2324-sn-torcedor-nike-masculina/20/JD8-3972-120/JD8-3972-120_zoom1.jpg?ts=1701710516&ims=1088x",
    nome: "Camisa Corinthians III 23/24 s/n° Torcedor Nike Masculina - Preto+Dourado",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 284.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-i-2425-sn-torcedor-nike-masculina/28/JD8-6758-028/JD8-6758-028_zoom1.jpg?ts=1715694444&ims=326x",
    nome: "Camisa Corinthians I 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2425-sn-torcedor-nike-masculina/28/JD8-7872-028/JD8-7872-028_zoom1.jpg?ts=1725273727&ims=1088x",
    nome: "Camisa Corinthians III 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-iii-2425-nike-masculina/06/JD8-7875-006/JD8-7875-006_zoom1.jpg?ts=1729706316&ims=1088x",
    nome: "Jaqueta Corinthians III 24/25 Nike Masculina - Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 599.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-2425-hino-nike-feminina/28/JD8-7048-028/JD8-7048-028_zoom1.jpg?ts=1718098747&ims=1088x",
    nome: "Jaqueta Corinthians 24/25 Hino Nike Feminina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 360.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/corta-vento-corinthians-2425-nike-masculino/01/JD8-8171-401/JD8-8171-401_zoom1.jpg?ts=1728583357&ims=1088x",
    nome: "Corta Vento Corinthians 24/25 Nike Masculino - Marrom",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 759.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2324-sn-torcedor-nike-masculina/20/JD8-3972-120/JD8-3972-120_zoom1.jpg?ts=1701710516&ims=1088x",
    nome: "Camisa Corinthians III 23/24 s/n° Torcedor Nike Masculina - Preto+Dourado",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 284.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-i-2425-sn-torcedor-nike-masculina/28/JD8-6758-028/JD8-6758-028_zoom1.jpg?ts=1715694444&ims=326x",
    nome: "Camisa Corinthians I 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2425-sn-torcedor-nike-masculina/28/JD8-7872-028/JD8-7872-028_zoom1.jpg?ts=1725273727&ims=1088x",
    nome: "Camisa Corinthians III 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-iii-2425-nike-masculina/06/JD8-7875-006/JD8-7875-006_zoom1.jpg?ts=1729706316&ims=1088x",
    nome: "Jaqueta Corinthians III 24/25 Nike Masculina - Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/jaqueta-corinthians-2425-hino-nike-feminina/28/JD8-7048-028/JD8-7048-028_zoom1.jpg?ts=1718098747&ims=1088x",
    nome: "Jaqueta Corinthians 24/25 Hino Nike Feminina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/corta-vento-corinthians-2425-nike-masculino/01/JD8-8171-401/JD8-8171-401_zoom1.jpg?ts=1728583357&ims=1088x",
    nome: "Corta Vento Corinthians 24/25 Nike Masculino - Marrom",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2324-sn-torcedor-nike-masculina/20/JD8-3972-120/JD8-3972-120_zoom1.jpg?ts=1701710516&ims=1088x",
    nome: "Camisa Corinthians III 23/24 s/n° Torcedor Nike Masculina - Preto+Dourado",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-i-2425-sn-torcedor-nike-masculina/28/JD8-6758-028/JD8-6758-028_zoom1.jpg?ts=1715694444&ims=326x",
    nome: "Camisa Corinthians I 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  {
    imageUrl:
      "https://static.shoptimao.com.br/produtos/camisa-corinthians-iii-2425-sn-torcedor-nike-masculina/28/JD8-7872-028/JD8-7872-028_zoom1.jpg?ts=1725273727&ims=1088x",
    nome: "Camisa Corinthians III 24/25 s/n° Torcedor Nike Masculina - Branco+Preto",
    categoria: "Corinthians/Futebol/Masculino",
    preco: 349.99,
  },
  // Adicione mais produtos conforme necessário
];

export default produtos;
