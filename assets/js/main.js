const phrases = [
  "Let him cook...",
  "Compilando perdão, aguarde.",
  "Código não quebrou hoje? Suspeito…",
  "Automatize primeiro, pergunte depois.",
  "Se dá pra fazer na mão, dá pra automatizar.",
  "Mais logs, menos caos.",
];

function setRandomPhrase() {
  const el = document.getElementById("dynamic-phrase");
  if (!el) return;
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  el.textContent = random;
}

// Card noturno (00h - 03h)
function toggleNightCard() {
  const card = document.getElementById("card-night");
  if (!card) return;
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 0 && hour < 3) {
    card.classList.remove("hidden");
  } else {
    card.classList.add("hidden");
  }
}

// Footer triple click easter egg
let footerClickCount = 0;
let footerClickTimer = null;

function setupFooterSecret() {
  const footerText = document.getElementById("footer-text");
  const footerSecret = document.getElementById("footer-secret");
  if (!footerText || !footerSecret) return;

  footerText.addEventListener("click", () => {
    footerClickCount++;

    if (footerClickTimer) clearTimeout(footerClickTimer);

    footerClickTimer = setTimeout(() => {
      footerClickCount = 0;
    }, 700); // 0.7s pra dar 3 cliques rápidos

    if (footerClickCount >= 3) {
      footerClickCount = 0;
      footerSecret.classList.toggle("hidden");
    }
  });
}

// Konami Code versão João Albero: ↑↑↓↓←→←→ J V A
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyJ",
  "KeyV",
  "KeyA",
];

let keyBuffer = [];

function setupKonamiCode() {
  window.addEventListener("keydown", (event) => {
    keyBuffer.push(event.code);

    if (keyBuffer.length > konamiSequence.length) {
      keyBuffer.shift();
    }

    if (konamiSequence.every((code, index) => code === keyBuffer[index])) {
      activateAlberoMode();
      keyBuffer = [];
    }
  });
}

function activateAlberoMode() {
  // Classe no body pra aplicar visual turbinado
  document.body.classList.toggle("albero-mode");

  const secretSection = document.getElementById("secret-section");
  if (secretSection) {
    secretSection.classList.remove("hidden");
  }

  const terminalBody = document.getElementById("terminal-body");
  if (terminalBody) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML =
      ">> JOÃO ALBERO MODE 200% ATIVADO. Novos segredos podem ter sido liberados...";
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

// Terminal básico (por enquanto só ecoa e avisa sobre 'help')
function setupTerminal() {
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");
  if (!input || !body) return;

  function printLine(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.textContent = text;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
  }

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const value = input.value.trim();
      if (!value) return;

      printLine(`joao@albero:~$ ${value}`);

      // Por enquanto só um comportamento inicial
      if (value.toLowerCase() === "help") {
        printLine("Comandos em breve: about, skills, projects, show cv, unlock, matrix, play snake...");
      } else {
        printLine("Comando ainda não implementado. Tente 'help'.");
      }

      input.value = "";
    }
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  setRandomPhrase();
  toggleNightCard();
  setupFooterSecret();
  setupKonamiCode();
  setupTerminal();
});