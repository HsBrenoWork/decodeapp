function showDecodePlus() {
  const results = JSON.parse(localStorage.getItem("decodeResults"));
  if (!results || !results.signals) {
    console.error("Resultados não encontrados.");
    return;
  }

  const container = document.getElementById("decode-plus-container");
  container.innerHTML = `
    <img src="img/decodeLogo.png" class="decode-logo-result">
    <h2 class="decode-plus-title">🔥 DECODE PLUS <br> Como despertar os sinais que ela ainda não revelou...</h2>
  `;

  const undemonstrated = results.signals.filter(s => !s.selected);

  const grouped = {
    linguagemCorporal: [],
    expressoesFaciais: [],
    interacaoVerbal: [],
    comportamentoContextual: []
  };

  undemonstrated.forEach(signal => {
    if (grouped[signal.group]) {
      grouped[signal.group].push(signal);
    }
  });

  function renderGroup(title, signals) {
    if (signals.length === 0) return '';

    const cards = signals.map(signal => `
      <div class="signal-card">
        <p><b>${signal.name}</b>: ${signal.definition}</p>
        <p><b class="red-font">❤️ O que fazer:</b> ${signal.whatToDo}</p>
        <p><b class="red-font">💔 O que não fazer:</b> ${signal.whatNotToDo}</p>
        <p><b class="red-font">🔓 Como ativar microexpressão:</b> ${signal.howToMakeHerShowThisSignal}</p>
      </div>
    `).join('');

    return `
      <div class="result-group">
        <h3 class="group-name red-title">${title}</h3>
        <div class="signal-scroll-wrapper">
          <div class="signal-card-horizontal">
            ${cards}
          </div>
        </div>
      </div>
      <hr class="line">
    `;
  }

  // Append all groups
  container.innerHTML += `
    ${renderGroup("Comunicação Não Verbal –<br> Linguagem Corporal", grouped.linguagemCorporal)}
    ${renderGroup("Comunicação Não Verbal –<br> Expressões Faciais", grouped.expressoesFaciais)}
    ${renderGroup("Interação <br> Verbal", grouped.interacaoVerbal)}
    ${renderGroup("Comportamento <br> Contextual", grouped.comportamentoContextual)}
  `;

  // Inject final offer as last element
  const offerHTML = `
    <div class="offer-container">
      <img src="img/decodeAffiliateCover.png" alt="Liberar Licença Decode Plus" class="offer-image">

      <h3 class="group-offer red-title" style="text-align: start; font-size: 28px; margin-top: 40px">
        Libere Sua Licença Decode e Comece a Faturar Hoje Mesmo!
      </h3>

      <p class="offer-description" style="text-align: start;">
        Quer ganhar dinheiro com o Decode?<br>
        Com a <b>Licença Decode</b>, você se torna um afiliado oficial e recebe um link especial para divulgar o app.<br>
        Sempre que alguém comprar através de você, parte da venda é sua!  
        <br><br>
        ✅ Comissão de <b>60%</b> por venda. <br>
        ✅ <b>Sem precisar aparecer.</b> Sem dar suporte. <br>
        ✅ Você fatura <b>no automático</b>, todos os dias. <br> 
        ✅ Pronto para divulgar <b>com 1 clique.</b>
        <br><br>
        <i>Você já tem acesso ao app... Agora é sua chance de faturar com ele.</i>
        <br><br>
      </p>

      <div class="center-btn" style="margin-bottom: 40px">
        <a href="https://pay.cakto.com.br/3avw2sw_486648" target="_blank" class="offer-button">
          Quero Vender o Decode <br> e Lucrar Agora
        </a>
      </div>
    </div>
  `;

  const offerElement = document.createElement("div");
  offerElement.innerHTML = offerHTML;
  container.appendChild(offerElement);
}

showDecodePlus();
