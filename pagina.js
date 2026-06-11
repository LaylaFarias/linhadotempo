/**
 * ════════════════════════════════════════════════════════
 *  NOSSA HISTÓRIA — pagina.js
 *  Lê o parâmetro ?id= da URL, encontra o card
 *  correspondente em CARDS_DATA e preenche a página.
 * ════════════════════════════════════════════════════════
 */

(function () {
  /* Aguarda os dados carregados pelo script.js */
  const cards = window.CARDS_DATA || [];

  /* Lê o ?id= da URL */
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const card = cards.find((c) => c.id === id);

  /* Se não encontrar, mostra mensagem amigável */
  if (!card) {
    document.getElementById("pg-title").textContent = "Memória não encontrada";
    document.getElementById("pg-date").textContent = "";
    document.getElementById("pg-texto").innerHTML =
      "<p>Ops! Esta memória não existe. <a href='index.html'>Voltar ao início.</a></p>";
    return;
  }

  /* ─── Preenche cabeçalho ─── */
  document.title = `${card.title} ♡`;
  document.getElementById("pg-date").textContent = card.date;
  document.getElementById("pg-title").textContent = card.title;

  /* ─── Preenche texto pessoal ─── */
  document.getElementById("pg-texto").innerHTML = card.texto || "<p>Sem texto ainda.</p>";

  /* ─── Poesia ─── */
  const btnPoesia = document.getElementById("btn-poesia");
  const poesiaBox = document.getElementById("poesia-box");
  const poesiaTexto = document.getElementById("poesia-texto");

  /* Formata a poesia: remove indentação excessiva e espaços em branco */
  function formatarPoesia(raw) {
    return raw
      .split("\n")
      .map((l) => l.trim())
      .join("\n")
      .replace(/^\n+/, "")
      .replace(/\n+$/, "");
  }

  poesiaTexto.textContent = formatarPoesia(card.poesia || "Uma poesia está a caminho...");

  let aberta = false;

  btnPoesia.addEventListener("click", function () {
    aberta = !aberta;

    if (aberta) {
      poesiaBox.hidden = false;
      btnPoesia.setAttribute("aria-expanded", "true");
      btnPoesia.innerHTML = `<span class="btn-poesia-icon">🌸</span> Ocultar a poesia`;
      /* Rola suavemente até a poesia */
      setTimeout(() => {
        poesiaBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 80);
    } else {
      poesiaBox.hidden = true;
      btnPoesia.setAttribute("aria-expanded", "false");
      btnPoesia.innerHTML = `<span class="btn-poesia-icon">🌸</span> Revelar a poesia`;
    }
  });
})();