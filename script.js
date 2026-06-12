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
      <p>
foi nossa primeira vez conversando e, modéstia a parte, eu que puxei assunto. sendo honesta, sabemos que a gente não tinha intenção alguma naquela conversa, acho que nem sabíamos que iríamos virar amigas (e com toda a sorte do mundo, namoradas), mas tenho certeza que foi a melhor coisa que fiz. começar uma conversa descontraída, que se desenrolou e se transformou em algo muito maior do que poderíamos imaginar. 
desde então, sou grata diariamente por te conhecer, desde aquele dia que pedi pra maria clara te chamar e você nem ouviu até hoje, quando sou capaz de dizer que te amo cada dia mais. 
obrigada por tudo que proporcionou a mim desde o dia 07/02/2026. eu te amo mais a cada segundo que se passa.</p>
    `,

    // POESIA exibida ao clicar no botão
    poesia: `
quero me apaixonar
amar perdidamente alguém 
dedicar poesias
quero ser de alguém 
ter alguém.
um amor de filme
aqueles de sessão da tarde
onde cada encontro parece um acidente
mas é planejado pelo destino.
quero um amor que mexa com a minha cabeça 
que me tire do sério
que me deixe numa corda bamba
pronta para cair nos braços de alguém.

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
      <p>
o bendito dia que fui fazer trança na sua casa. bom, se eu fosse definir você como uma hora, lugar e pessoa (você ainda não é nerd o suficiente para entender essa ref), tenho certeza que te definiria como essa hora: quando nós duas estávamos super nervosas, você louca pra me beijar, eu louca para deixar você me beijar.
esse dia foi o nosso primeiro marco e eu tenho certeza que vou me lembrar dele por anos e anos e contar cada detalhe pra quem surgir na nossa vida e com certeza será citado nos meus votos de casamento. bom, além do nosso primeiro beijo (selinho, mas você entendeu o que eu quis dizer), foi a primeira vez que você me hipnotizou com seu dons musicais (apesar de eu até gostar qnd vc toca o pandeiro também), a primeira vez que a gente se viu no meio da chuva, a primeira vez que a gente deitou abraçadinha e eu jurei que poderia morar naquele momento, a primeira vez que você quebrou minha marra de loba e bem, a primeira vez que percebi o quão apaixonada eu tava. 
por mim, todos os dias seriam 28 de fevereiro de 2026 (mentira, seriam 24 de maio, mas esse é so um detalhe um pouco mais para a frente do site)</p>
    `,

    poesia: `
      te olho com tanta intensidade
esperando que meus olhos sejam capazes 
de transmitir o que a boca não sabe dizer 
o que nenhum dicionário saberia explicar.
"o que você tanto olha?"
você 
é só o que consigo formular
gastaria tempo demais para explicar cada detalhe seu que admiro
é melhor usar o tempo com você 
mesmo em silêncio 
só eu e você 
a gente pode esquecer do mundo lá fora
deixa a chuva chegar
o trovão estremecer
eu me aqueço com você 
me esqueço contigo.
por mim, seu nome ocuparia um lugar no dicionário 
seria um sinônimo para tudo que é bom:
beleza
graça 
formosa
perfeição 
mas de um jeito mais intenso 
de um jeito seu.
é muito para se traduzir em um olhar?
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
      <p>17 de março

dia que finalmente tivemos coragem de admitir os verdadeiros sentimentos, antes disso, eu tava extremamente nervosa e sonhando com esse momento. confesso que fiz até a maria clara te induzir a falar a verdade para ela, para eu poder sonhar com mais realidade sabekk 
enfim, eu tinha imaginado esse momentos bem antes, naquela ligação que a gente fez, no dia do meu aniversário e até mesmo em momentos mais descontraídos em que você nem imagina o tamanho da vontade que eu tava pra te dizer oq eu sentia. apesar de hoje em dia ter se tornado muito mais fácil de te dizer, ainda sinto o nervosismo da primeira vez, aquele frio bom na barriga e o sorriso maior do que consigo segurar.
tenho orgulho de poder oficialmente olhar bem no seu olho e dizer que te amo, a verdade mais sincera e bonita do fundo do meu coração. eu te amo demais!</p>
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

  /* ─── CARD 3 ─── */
  {
    id: "touca",
    date: "8 de abril, 2026",
    title: "Dia da touca",
    snippet: "O dia que chorei por causa de uma touca(micoso demais)",
    icon: "☼",
    featured: false,

    texto: `
      <p>8 de abril

ok, admito que esse é o texto mais bobinho que to fazendo, porque ficar aqui explicando o porquê de sempre chorar com as suas demonstrações de afeto talvez seja meio desnecessário. 
bom, 8 de abril foi a primeira vez que você me fez chorar copiosamente por causa de algo bobo, como uma touca de cetim, mas sei lá, por quão bobo pareça, sempre vou enxergar um significado muito maior por trás. eu estava a semana reclamando de algo (daquela touca velha com o elástico mais morto que calcinha de vó) e você além de ouvir meus desabafos desnecessários sobre aquela coisa, você ainda me ofereceu a solução, como se não fosse nada. eai a primeira vez que eu usei, não teve jeito, eu me desmanchei em lágrimas.
chorei porque sla, acho que nunca tive ninguém como você na minha vida, que fosse tanto e que fosse só para mim, alguém que eu pudesse dizer que tava chorando por causa de algo tão bobinho e continuasse me ouvindo como se isso fosse normal, alguém que prestasse atenção em detalhes e se mostrasse presente.
com aquela touca ou não, você é o meu maior presente, como alguém que veio como modo de recompensa para tudo que tinha dado errado antes.</p>
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
