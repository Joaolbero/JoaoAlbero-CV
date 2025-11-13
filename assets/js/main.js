const phrases = [
  "Let him cook...",
  "Compilando perdão, aguarde.",
  "Código não quebrou hoje? Suspeito…",
  "Automatize primeiro, pergunte depois.",
  "Se dá pra fazer na mão, dá pra automatizar.",
  "Mais logs, menos caos."
];

let matrixInterval = null;
let matrixCanvas = null;

function setRandomPhrase() {
  const el = document.getElementById("dynamic-phrase");
  if (!el) return;
  const random = phrases[Math.floor(Math.random() * phrases.length)];
  el.textContent = random;
}

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
    }, 700);

    if (footerClickCount >= 3) {
      footerClickCount = 0;
      footerSecret.classList.toggle("hidden");
    }
  });
}

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
  "KeyA"
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
  document.body.classList.toggle("albero-mode");

  const secretSection = document.getElementById("secret-section");
  if (secretSection) {
    secretSection.classList.toggle("hidden");
  }

  const terminalBody = document.getElementById("terminal-body");
  if (terminalBody) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = ">> Modo Turbo Ativado — Neon intensificado e área secreta liberada.";
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

function startMatrixEffect() {
  if (matrixInterval) return;

  const overlay = document.getElementById("matrix-overlay");
  if (!overlay) return;

  overlay.classList.remove("hidden");
  overlay.innerHTML = "";

  const canvas = document.createElement("canvas");
  matrixCanvas = canvas;
  overlay.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const chars = "01█▓░<>[]{}#@$&";
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
  }

  matrixInterval = setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff7f";
    ctx.font = fontSize + "px JetBrains Mono";

    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i]++;
      }
    }
  }, 50);
}

function stopMatrixEffect() {
  const overlay = document.getElementById("matrix-overlay");
  if (!overlay) return;

  if (matrixInterval) {
    clearInterval(matrixInterval);
    matrixInterval = null;
  }

  overlay.classList.add("hidden");
  overlay.innerHTML = "";
}

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

  function printEmptyLine() {
    printLine("");
  }

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const value = input.value.trim();
      if (!value) return;

      const lower = value.toLowerCase();
      printLine("joao@albero:~$ " + value);

      if (lower === "help") {
        printLine("Comandos disponíveis:");
        printLine("  help         - mostra esta ajuda");
        printLine("  about        - resumo sobre mim");
        printLine("  skills       - principais tecnologias");
        printLine("  projects     - alguns projetos em destaque");
        printLine("  show cv      - currículo em PDF (em breve)");
        printLine("  matrix       - ativa o modo Matrix");
        printLine("  matrix off   - desativa o modo Matrix");
        printLine("  play snake   - minigame Snake (em breve)");
        printLine("  clear        - limpa o terminal");
        printEmptyLine();
      } else if (lower === "about") {
        printLine("Sou estudante de Ciência da Computação e desenvolvedor focado em automação, back-end");
        printLine("e segurança. Curto transformar processos manuais em soluções inteligentes.");
        printEmptyLine();
      } else if (lower === "skills") {
        printLine("Principais stacks e ferramentas:");
        printLine("- Python (automação, RPA, scripts para ambiente corporativo)");
        printLine("- JavaScript / Node.js");
        printLine("- Git e GitHub");
        printLine("- APIs REST e integrações");
        printLine("- Bancos de Dados");
        printLine("- Linux / Bash");
        printEmptyLine();
      } else if (lower === "projects") {
        printLine("Alguns projetos em destaque:");
        printLine("- Fast Seguros Automation: automação real para corretora de seguros.");
        printLine("- Outros projetos públicos: github.com/Joaolbero");
        printEmptyLine();
      } else if (lower === "show cv") {
        printLine("Em breve: download direto do meu currículo em PDF por aqui.");
        printEmptyLine();
      } else if (lower === "matrix") {
        if (matrixInterval) {
          printLine("Modo Matrix já está ativo. Use 'matrix off' para desativar.");
        } else {
          printLine("Ativando modo Matrix...");
          startMatrixEffect();
        }
        printEmptyLine();
      } else if (lower === "matrix off" || lower === "matrix stop" || lower === "matrix end") {
        if (matrixInterval) {
          printLine("Desativando modo Matrix.");
          stopMatrixEffect();
        } else {
          printLine("Modo Matrix não está ativo.");
        }
        printEmptyLine();
      } else if (lower === "play snake") {
        printLine("Em breve: minigame Snake jogável dentro do terminal.");
        printEmptyLine();
      } else if (lower === "clear") {
        body.innerHTML = "";
      } else {
        printLine("Comando não reconhecido. Digite 'help' para ver a lista.");
        printEmptyLine();
      }

      input.value = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setRandomPhrase();
  toggleNightCard();
  setupFooterSecret();
  setupKonamiCode();
  setupTerminal();
});