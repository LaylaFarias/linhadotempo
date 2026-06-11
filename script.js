/**
 * ════════════════════════════════════════════════════════
 *  NOSSA HISTÓRIA — script.js
 *  Edite o array `cards` para personalizar datas, textos
 *  e poesias de cada card.
 * ════════════════════════════════════════════════════════
 */

const cards = [
  /* ─── CARD 1 ─── */
  {
    id: "primeira-conversa",
    date: "7 de fevereiro, 2026",
    title: "A primeira conversa",
    snippet: "O começo de tudo (ai que brega)",
    icon: "✧",
    featured: false,

    // TEXTO exibido na página interna
    texto: `
      <p>Lembro de cada detalhe daquele dia como se fosse ontem.
      A luz da tarde pintava tudo de dourado, e quando te vi,
      percebi que algumas coisas na vida simplesmente acontecem
      para nos lembrar do quanto o mundo pode ser bonito.</p>

      <p>Não havia nada de ordinário naquele momento — havia
      apenas você, e a certeza suave de que queria te conhecer
      para sempre.</p>

      <p>Guardo esse dia como um tesouro que nenhuma distância
      pode apagar. Foi o começo da nossa história mais bonita.</p>
    `,

    // POESIA exibida ao clicar no botão
    poesia: `
      No instante em que te vi, o mundo
      respirou diferente —
      como campo após a chuva,
      como manhã que ainda não sabe
      o quanto será luminosa.

      Havia em ti algo de jardim secreto,
      de carta não enviada,
      de promessa que se cumpre
      sem que se precise de palavras.

      E eu, que não acreditava em coincidências,
      passei a acreditar em você.
    `,
  },

  /* ─── CARD 2 ─── */
  {
    id: "primeiro-date",
    date: "28 de fevereiro, 2026",
    title: "Primeiro date",
    snippet: "O dia que cê fez trança em mim",
    icon: "♫",
    featured: false,

    texto: `
      <p>Três meses pareciam poucos para contar tanta coisa —
      mas com você, o tempo sempre soube se esticar nos momentos
      certos e voar quando estávamos felizes.</p>

      <p>Aprendi nesse período que amor de verdade não precisa
      de gestos enormes. Às vezes é uma mensagem no meio do dia,
      um riso compartilhado, um silêncio que não pesa.</p>

      <p>Três meses. Mas valeram uma vida de saudade boa.</p>
    `,

    poesia: `
      Três meses são noventa amanheceres
      em que pensei em ti antes de qualquer coisa —
      antes do café, antes do sol,
      antes mesmo de lembrar
      quem sou sem você.

      São noventa noites
      em que a última imagem guardada
      foi o teu sorriso,
      esse que não se explica
      e não se esquece.

      Noventa vezes amei.
      Noventa vezes foi pouco.
    `,
  },

  /* ─── CARD 3 ─── */
  {
    id: "touca",
    date: "8 de abril, 2026",
    title: "Dia da touca",
    snippet: "O dia que chorei por causa de uma touca(micoso demais)",
    icon: "☼",
    featured: false,

    texto: `
      <p>Viajar com alguém revela quem essa pessoa realmente é —
      e você me surpreendeu em cada parada, em cada mapa aberto,
      em cada refeição improvisada que virou memória afetiva.</p>

      <p>O que eu amei não foi o lugar. Foi o jeito como você
      olhava para tudo com olhos de quem quer guardar.</p>

      <p>Posso não me lembrar de cada rua, mas jamais vou esquecer
      a sensação de estar perdido no mundo e completamente
      em casa ao seu lado.</p>
    `,

    poesia: `
      Levamos malas pequenas
      e voltamos com o coração mais cheio
      do que imaginámos partir.

      Aprendemos que o destino
      nunca foi o lugar no mapa —
      foi o momento em que olhamos
      para o mesmo horizonte
      e quisemos o mesmo.

      Carrego em mim cada estrada percorrida contigo,
      cada desvio que virou aventura,
      cada chegada que pareceu lar.

      Com você, qualquer lugar chega a ser casa.
    `,
  },

  /* ─── CARD 4 ─── */
  {
    id: "eu-te-amo",
    date: "17 de março, 2026",
    title: "O 'primeiro' eu te amo",
    snippet: "Quando a gente oficializou o sentimento",
    icon: "♡⃕",
    featured: false,

    texto: `
      <p>Um ano. Parece que foi ontem e parece que já te conheço
      há uma vida inteira — e talvez seja exatamente isso
      que acontece quando encontramos quem nos faz bem de verdade.</p>

      <p>Cresci com você. Aprendi a ser mais paciente, mais presente,
      mais grato pelas pequenas coisas. Você me ensinou isso
      sem nenhuma aula, só existindo.</p>

      <p>Que cada próximo ano seja ainda mais lindo do que este.
      Que a gente continue escolhendo um ao outro,
      todo dia, como se fosse a primeira vez.</p>
    `,

    poesia: `
      Um ano cabem muitas coisas:
      risos que ainda ecoam,
      brigas que nos ensinaram a ceder,
      abraços que esquecemos de contar
      porque eram muitos.

      Cabem noites longas de conversa
      e manhãs preguiçosas de silêncio.
      Cabe o teu nome dito
      de todas as formas que conheço —
      com saudade, com ternura,
      com admiração, com alívio.

      Um ano. E eu escolheria de novo
      cada um dos dias
      que te trouxeram até mim.
    `,
  },
    /* ─── CARD 5 ─── */
  {
     id: "pedido",
    date: "24 de maio, 2026",
    title: "O pedido oficial",
    snippet: "Quando recebi o quadro e te fiz chorar.",
    icon: "👁",
    featured: false,

    texto: `
      <p>Um ano. Parece que foi ontem e parece que já te conheço
      há uma vida inteira — e talvez seja exatamente isso
      que acontece quando encontramos quem nos faz bem de verdade.</p>

      <p>Cresci com você. Aprendi a ser mais paciente, mais presente,
      mais grato pelas pequenas coisas. Você me ensinou isso
      sem nenhuma aula, só existindo.</p>

      <p>Que cada próximo ano seja ainda mais lindo do que este.
      Que a gente continue escolhendo um ao outro,
      todo dia, como se fosse a primeira vez.</p>
    `,

    poesia: `
      Um ano cabem muitas coisas:
      risos que ainda ecoam,
      brigas que nos ensinaram a ceder,
      abraços que esquecemos de contar
      porque eram muitos.

      Cabem noites longas de conversa
      e manhãs preguiçosas de silêncio.
      Cabe o teu nome dito
      de todas as formas que conheço —
      com saudade, com ternura,
      com admiração, com alívio.

      Um ano. E eu escolheria de novo
      cada um dos dias
      que te trouxeram até mim.
    `,
  },

  /* ─── CARD 6 ─── */
  {
    id: "17 de março, 2026",
    date: "12 de Maio, 2024",
    title: "Extras",
    snippet: "talvez um pouco desnecessários",
    icon: "∞",
    featured: false,

    texto: `
      <p>

nossa filha vai se chamar Ísis, eu espero que ela tenha olhos iguais ao seus, para eu me apaixonar uma vez mais pelos mesmos olhos. 
se for menino, espero que ele puxe seu dom para a arte, assim eu posso ouvir vocês fazendo todo a música do mundo na sala de casa.
sua cor favorita é verde, a minha é amarelo. isso sempre me faz imaginar nossa casa, com uma entrada amarela e as paredes da sala com um tom de verde, 
o nosso quintal cheio de plantinhas que nós sofremos para mantê-las vivas, nosso quarto com detalhes das duas cores para guardar um pouquinho de nós duas ali.
desde que te conheci, 
vi você mudar de cabelo 4 vezes, o que para muitas pessoas pode não significar nada, mas para mim, 
significou a chance de me apaixonar e de perceber o amor 4 vezes pela mesma pessoa. também desde que te conheci, 
meu número de choros aumentou e, apesar de isso não parecer uma coisa boa, eu sei que chorei por me sentir amada demais, as vezes chorei por não me achar digna do seu amor tão gigante, as vezes chorei porque o meu amor era tanto que eu precisava externalizar, as vezes chorava porque você é você e eu sou eu e ainda bem que nos encontramos nessa vida.
existem inúmeros fatos curiosos entre nós duas, 
coisas que deixo entre nós, que gostaria de compartilhar pros meus amigos mais íntimos, 
que gostaria de guardar e deixar de decoração na nossa futura casa amarela com verde, que gostaria de compartilhar 
cada detalhe com a nossa menina ou menino.
no mais, gostaria de dizer que tudo isso é apenas uma pequena demonstração do grande sentimento que tenho por você. 
eu te amo de maneira tão intensa que nem mesmo sou capaz de descrever com certeza, mas espero encontrar uma maneira ainda nessa vida que passo ao seu lado.</p>
    `,

    poesia: `
      ok, pra essa eu tenho que admitir que acho que gastei meus dons artísticos
    `,
  },

  /* ─── CARD 7 — ESPECIAL (fotos/vídeos) ─── */
  {
    id: "momentos-especiais",
    date: "Álbum",
    title: "Momentos Especiais",
    snippet: "Fotografias e memórias que guardarei para sempre.",
    icon: "📷",
    featured: true,      // ← card destacado com borda dourada
    isGallery: true,     // ← redireciona para galeria.html

    texto: "",  // não é usado neste card
    poesia: "", // não é usado neste card
  },
];

/* ════════════════════════════════════════════════════════
   RENDERIZAÇÃO — não é necessário editar abaixo
   ════════════════════════════════════════════════════════ */

function renderCards() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  cards.forEach((card) => {
    const href = card.isGallery
      ? "galeria.html"
      : `pagina.html?id=${encodeURIComponent(card.id)}`;

    const featuredBadge = card.featured
      ? `<span class="card-badge">Especial</span>`
      : "";

    const el = document.createElement("a");
    el.href = href;
    el.className = `card${card.featured ? " card--featured" : ""}`;
    el.setAttribute("aria-label", `Abrir memória: ${card.title}`);

    el.innerHTML = `
      ${featuredBadge}
      <div class="card-icon" aria-hidden="true">${card.icon}</div>
      <div class="card-body">
        <p class="card-date">${card.date}</p>
        <h2 class="card-title">${card.title}</h2>
        <p class="card-snippet">${card.snippet}</p>
        <span class="card-cta">Ver memória</span>
      </div>
    `;

    container.appendChild(el);
  });
}

/* Expõe os dados para pagina.js */
window.CARDS_DATA = cards;

renderCards();