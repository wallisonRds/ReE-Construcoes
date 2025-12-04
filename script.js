const carrossel = document.getElementById("carrossel");
const imagemPrincipal = document.getElementById("imagem-principal");
const titulo = document.getElementById("servico-titulo");
const subtitulo = document.getElementById("servico-subtitulo");
const servicoLista = document.getElementById("servico-lista");
const imagemDepoimento = document.getElementById("imagem-principal2");
const depoimentoTexto = document.getElementById("depoimento-texto");
const depoimentoCliente = document.getElementById("depoimento-cliente");
const seta = document.getElementById("seta");

const items = [
  {
    imagemSrc: "./src/assets/images/construcao.png",
    servicoTitulo: "construções novas",
    servicoSubtitulo: "Projetos Completos",
    servicoLista: [
      "casas residenciais",
      "Reformas estruturais",
      "Ampliações residenciais",
      "Consultoria técnica",
    ],
  },
  {
    imagemSrc: "./src/assets/images/eletrica.png",
    servicoTitulo: "Elétrica",
    servicoSubtitulo: "Instalações e manutenção elétrica",
    servicoLista: [
      "Montagem de quadros e disjuntores",
      "Iluminação interna e externa",
      "Instalações de tomadas e interruptores ",
      "Passagem de cabos e conduítes",
    ],
  },
  {
    imagemSrc: "./src/assets/images/pintura.png",
    servicoTitulo: "Pintura",
    servicoSubtitulo: "Acabamento estético",
    servicoLista: [
      "Pintura interna e externa",
      "Massa corrida e lixamento",
      "Pintura decorativa e texturizada",
      "Vernizes, esmaltes e  impermeabilizantes",
    ],
  },
  {
    imagemSrc: "./src/assets/images/encanamento.png",
    servicoTitulo: "Hidráulica",
    servicoSubtitulo: "Soluções em redes de água",
    servicoLista: [
      "Instalação e manutenção de encanamentos",
      "Conserto de vazamentos e entupimentos",
      "Instalação de torneiras, pias e vasos sanitários",
      "Montagem de redes de esgoto e pluvial  ",
    ],
  },
  {
    imagemSrc: "./src/assets/images/revestimento.png",
    servicoTitulo: "Revestimentos",
    servicoSubtitulo: "Revestimentos com precisão",
    servicoLista: [
      "Assentamento de pisos e azulejos",
      "Porcelanatos e cerâmicas grandes formatos",
      "Nivelamento e rejuntamento",
      "Reformas de banheiros e cozinhas",
    ],
  },
  {
    imagemSrc: "./src/assets/images/gesso.png",
    servicoTitulo: "Drywall e Gesso",
    servicoSubtitulo: "Soluções modernas para interiores",
    servicoLista: [
      "Instalação de paredes e divisórias em drywall",
      "Forros de gesso acartonado",
      "Isolamento termoacústico",
      "Reparos e manutenções ",
    ],
  },
];

for (const item of items) {
  const imagemCriada = createImg(item.imagemSrc);
  imagemCriada.addEventListener("click", () => {
    imagemPrincipal.src = imagemCriada.src;
    mudarInfo(item.servicoTitulo, item.servicoSubtitulo, item.servicoLista);
  });
}

function createImg(imagemSrc) {
  const image = document.createElement("img");
  image.src = imagemSrc;
  carrossel.appendChild(image);
  return image;
}

function mudarInfo(servicoTitulo, servicoSubtitulo, servicoList) {
  titulo.textContent = servicoTitulo;
  subtitulo.textContent = servicoSubtitulo;
  servicoLista.innerHTML = "";
  for (const servico of servicoList) {
    const li = document.createElement("li");
    li.textContent = servico;
    servicoLista.appendChild(li);
  }
}
