let currentLang = "pt";

const translations = {
  "nav.about": {
    pt: "Sobre",
    en: "About"
  },
  "nav.skills": {
    pt: "Skills",
    en: "Skills"
  },
  "nav.projects": {
    pt: "Projetos",
    en: "Projects"
  },
  "nav.terminal": {
    pt: "Terminal",
    en: "Terminal"
  },
  "hero.title": {
    pt: "Desenvolvedor focado em Automação, Back-end e Segurança",
    en: "Developer focused on Automation, Back-end and Security"
  },
  "hero.subtitle": {
    pt: "Transformando burocracia em código e processos lentos em automações inteligentes.",
    en: "Turning bureaucracy into code and slow processes into smart automations."
  },
  "hero.buttons.terminal": {
    pt: "Abrir Terminal",
    en: "Open Terminal"
  },
  "hero.buttons.projects": {
    pt: "Ver Projetos",
    en: "View Projects"
  },
  "hero.phrases": {
    pt: [
      "Deixa ele codar...",
      "Compilando perdão, aguarde.",
      "Código não quebrou hoje? Suspeito…",
      "Automatize primeiro, pergunte depois.",
      "Se dá pra fazer na mão, dá pra automatizar.",
      "Mais logs, menos caos."
    ],
    en: [
      "Let him code...",
      "Compiling forgiveness, please wait.",
      "Code didn’t break today? Suspicious…",
      "Automate first, ask later.",
      "If it can be done manually, it can be automated.",
      "More logs, less chaos."
    ]
  },
  "cards.github.title": {
    pt: "GitHub",
    en: "GitHub"
  },
  "cards.github.text": {
    pt: "Repositórios, automações e experimentos.",
    en: "Repositories, automations and experiments."
  },
  "cards.github.button": {
    pt: "Abrir GitHub",
    en: "Open GitHub"
  },
  "cards.linkedin.title": {
    pt: "LinkedIn",
    en: "LinkedIn"
  },
  "cards.linkedin.text": {
    pt: "Histórico profissional e conexões.",
    en: "Professional history and connections."
  },
  "cards.linkedin.button": {
    pt: "Abrir LinkedIn",
    en: "Open LinkedIn"
  },
  "cards.cv.title": {
    pt: "Currículo PDF",
    en: "Resume PDF"
  },
  "cards.cv.text": {
    pt: "Versão em PDF do meu CV.",
    en: "PDF version of my resume."
  },
  "cards.cv.button": {
    pt: "Baixar CV",
    en: "Download CV"
  },
  "night.title": {
    pt: "Noturno Mode 😈",
    en: "Night Mode 😈"
  },
  "night.text": {
    pt: "Os devs verdadeiros ainda estão acordados.",
    en: "Real devs are still awake."
  },
  "night.button": {
    pt: "Reconhecer",
    en: "Acknowledge"
  },
  "night.ackMessage": {
    pt: "Você ativou o Noturno Mode. Respeito total. 💻🌙",
    en: "You activated Night Mode. Maximum respect. 💻🌙"
  },
  "about.title": {
    pt: "Sobre",
    en: "About"
  },
  "about.text": {
    pt: "Sou estudante de Ciência da Computação e atuo com automações reais em ambiente corporativo, criando soluções em Python e outras tecnologias para reduzir trabalho manual e evitar erros. Tenho foco em Back-end, automação de processos e segurança da informação.",
    en: "I am a Computer Science student working with real-world automations in corporate environments, creating solutions in Python and other technologies to reduce manual work and avoid errors. I am focused on Back-end, process automation, and information security."
  },
  "skills.title": {
    pt: "Skills & Stack",
    en: "Skills & Stack"
  },
  "skills.python": {
    pt: "Python (Automação, RPA)",
    en: "Python (Automation, RPA)"
  },
  "skills.js": {
    pt: "JavaScript / Node.js",
    en: "JavaScript / Node.js"
  },
  "skills.git": {
    pt: "Git & GitHub",
    en: "Git & GitHub"
  },
  "skills.apis": {
    pt: "APIs REST",
    en: "REST APIs"
  },
  "skills.db": {
    pt: "Banco de Dados",
    en: "Databases"
  },
  "skills.linux": {
    pt: "Linux / Bash",
    en: "Linux / Bash"
  },
  "projects.title": {
    pt: "Projetos em Destaque",
    en: "Featured Projects"
  },
  "projects.fast.title": {
    pt: "Fast Seguros – Automação",
    en: "Fast Seguros – Automation"
  },
  "projects.fast.desc": {
    pt: "Sistema de automação para corretora de seguros, usando Python, Selenium e manipulação de planilhas.",
    en: "Automation system for an insurance brokerage, using Python, Selenium and spreadsheet handling."
  },
  "projects.fast.button": {
    pt: "Ver no GitHub",
    en: "View on GitHub"
  },
  "terminal.title": {
    pt: "Terminal Interativo",
    en: "Interactive Terminal"
  },
  "terminal.welcome": {
    pt: "Bem-vindo ao terminal. Digite <span class=\"terminal-command\">help</span> para começar.",
    en: "Welcome to the terminal. Type <span class=\"terminal-command\">help</span> to begin."
  },
  "secret.title": {
    pt: "Fun Facts - Por Trás do Código",
    en: "Fun Facts - Behind the Code"
  },
  "secret.text": {
    pt: "Você desbloqueou o modo secreto. Se você chegou até aqui, provavelmente leva código a sério.",
    en: "You unlocked the secret mode. If you reached this point, you probably take code seriously."
  },
  "secret.fun1": {
    pt: "Fun fact 1: Eu realmente gosto de transformar caos em automação.",
    en: "Fun fact 1: I really like turning chaos into automation."
  },
  "secret.fun2": {
    pt: "Fun fact 2: Quanto mais difícil o problema, mais vontade de resolver.",
    en: "Fun fact 2: The harder the problem, the more I want to solve it."
  },
  "secret.fun3": {
    pt: "Fun fact 3: Se tem como automatizar, eu vou tentar.",
    en: "Fun fact 3: If it can be automated, I will try."
  },
  "footer.note": {
    pt: "Desenvolvido em modo dark & neon.",
    en: "Built in dark & neon mode."
  },
  "footer.secret": {
    pt: "Você desbloqueou o Dev Curioso 😎",
    en: "You unlocked the Curious Dev 😎"
  },
  "matrix.tip": {
    pt: "Pressione ESC ou digite \"matrix off\" para sair",
    en: "Press ESC or type \"matrix off\" to exit"
  },
  "konami.activated": {
    pt: ">> Modo Turbo Ativado — Neon intensificado e área secreta liberada.",
    en: ">> Turbo Mode Activated — Neon boosted and secret area unlocked."
  },
  "terminal.help.lines": {
    pt: [
      "Comandos disponíveis:",
      "  help         - mostra esta ajuda",
      "  about        - resumo sobre mim",
      "  skills       - principais tecnologias",
      "  projects     - alguns projetos em destaque",
      "  show cv      - currículo em PDF (em breve)",
      "  matrix       - ativa o modo Matrix",
      "  matrix off   - desativa o modo Matrix",
      "  play snake   - minigame Snake (em breve)",
      "  clear        - limpa o terminal"
    ],
    en: [
      "Available commands:",
      "  help         - shows this help",
      "  about        - short summary about me",
      "  skills       - main technologies",
      "  projects     - some featured projects",
      "  show cv      - resume in PDF (coming soon)",
      "  matrix       - activates Matrix mode",
      "  matrix off   - deactivates Matrix mode",
      "  play snake   - Snake minigame (coming soon)",
      "  clear        - clears the terminal"
    ]
  },
  "terminal.about.lines": {
    pt: [
      "Sou estudante de Ciência da Computação e desenvolvedor focado em automação, back-end",
      "e segurança. Curto transformar processos manuais em soluções inteligentes."
    ],
    en: [
      "I am a Computer Science student and developer focused on automation, back-end",
      "and security. I enjoy turning manual processes into smart solutions."
    ]
  },
  "terminal.skills.lines": {
    pt: [
      "Principais stacks e ferramentas:",
      "- Python (automação, RPA, scripts para ambiente corporativo)",
      "- JavaScript / Node.js",
      "- Git e GitHub",
      "- APIs REST e integrações",
      "- Bancos de Dados",
      "- Linux / Bash"
    ],
    en: [
      "Main stacks and tools:",
      "- Python (automation, RPA, scripts for corporate environments)",
      "- JavaScript / Node.js",
      "- Git and GitHub",
      "- REST APIs and integrations",
      "- Databases",
      "- Linux / Bash"
    ]
  },
  "terminal.projects.lines": {
    pt: [
      "Alguns projetos em destaque:",
      "- Fast Seguros Automation: automação real para corretora de seguros.",
      "- Outros projetos públicos: github.com/Joaolbero"
    ],
    en: [
      "Some featured projects:",
      "- Fast Seguros Automation: real-world automation for an insurance brokerage.",
      "- Other public projects: github.com/Joaolbero"
    ]
  },
  "terminal.showcv.lines": {
    pt: [
      "Em breve: download direto do meu currículo em PDF por aqui."
    ],
    en: [
      "Coming soon: direct download of my resume in PDF from here."
    ]
  },
  "terminal.matrix.alreadyOn": {
    pt: "Modo Matrix já está ativo. Use 'matrix off' para desativar ou clique na janela.",
    en: "Matrix mode is already active. Use 'matrix off' to turn it off or click the window."
  },
  "terminal.matrix.turningOn": {
    pt: "Ativando modo Matrix...",
    en: "Activating Matrix mode..."
  },
  "terminal.matrix.turningOff": {
    pt: "Desativando modo Matrix.",
    en: "Deactivating Matrix mode."
  },
  "terminal.matrix.notOn": {
    pt: "Modo Matrix não está ativo.",
    en: "Matrix mode is not active."
  },
  "terminal.snake.soon": {
    pt: "Em breve: minigame Snake jogável dentro do terminal.",
    en: "Coming soon: playable Snake minigame inside the terminal."
  },
  "terminal.unknown": {
    pt: "Comando não reconhecido. Digite 'help' para ver a lista.",
    en: "Unknown command. Type 'help' to see the list."
  }
};

let matrixInterval = null;

function setRandomPhrase() {
  const el = document.getElementById("dynamic-phrase");
  if (!el) return;
  const list = translations["hero.phrases"][currentLang];
  const random = list[Math.floor(Math.random() * list.length)];
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
    line.textContent = translations["konami.activated"][currentLang];
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
}

function startMatrixEffect() {
  if (matrixInterval) return;

  const overlay = document.getElementById("matrix-overlay");
  const canvas = document.getElementById("matrix-canvas");
  if (!overlay || !canvas) return;

  overlay.classList.remove("hidden");

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    const rect = overlay.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  overlay.onclick = () => {
    stopMatrixEffect();
  };

  const chars = "01█▓░<>[]{}#@$&";
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = [];

  function resetDrops() {
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
    }
  }

  resetDrops();

  matrixInterval = setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
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
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    stopMatrixEffect();
  }
});

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
        const lines = translations["terminal.help.lines"][currentLang];
        lines.forEach(printLine);
        printEmptyLine();
      } else if (lower === "about") {
        const lines = translations["terminal.about.lines"][currentLang];
        lines.forEach(printLine);
        printEmptyLine();
      } else if (lower === "skills") {
        const lines = translations["terminal.skills.lines"][currentLang];
        lines.forEach(printLine);
        printEmptyLine();
      } else if (lower === "projects") {
        const lines = translations["terminal.projects.lines"][currentLang];
        lines.forEach(printLine);
        printEmptyLine();
      } else if (lower === "show cv") {
        const lines = translations["terminal.showcv.lines"][currentLang];
        lines.forEach(printLine);
        printEmptyLine();
      } else if (lower === "matrix") {
        if (matrixInterval) {
          printLine(translations["terminal.matrix.alreadyOn"][currentLang]);
        } else {
          printLine(translations["terminal.matrix.turningOn"][currentLang]);
          startMatrixEffect();
        }
        printEmptyLine();
      } else if (lower === "matrix off" || lower === "matrix stop" || lower === "matrix end") {
        if (matrixInterval) {
          printLine(translations["terminal.matrix.turningOff"][currentLang]);
          stopMatrixEffect();
        } else {
          printLine(translations["terminal.matrix.notOn"][currentLang]);
        }
        printEmptyLine();
      } else if (lower === "play snake") {
        printLine(translations["terminal.snake.soon"][currentLang]);
        printEmptyLine();
      } else if (lower === "clear") {
        body.innerHTML = "";
      } else {
        printLine(translations["terminal.unknown"][currentLang]);
        printEmptyLine();
      }

      input.value = "";
    }
  });
}

function setupNightAck() {
  const btn = document.getElementById("night-ack-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    alert(translations["night.ackMessage"][currentLang]);
  });
}

function setupLangToggle() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const nextLang = currentLang === "pt" ? "en" : "pt";
    setLanguage(nextLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("joaoalbero_cv_lang", lang);
  } catch (e) {}

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (!entry) return;
    const value = entry[lang];
    if (value == null) return;

    if (el.id === "terminal-welcome") {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  const tip = document.getElementById("matrix-tip");
  if (tip && translations["matrix.tip"]) {
    tip.textContent = translations["matrix.tip"][lang];
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "pt" ? "🌎 EN" : "🌎 PT-BR";
  }

  setRandomPhrase();
}

function setupCvCard() {
  const cvCard = document.getElementById("card-cv");
  if (!cvCard) return;
  cvCard.addEventListener("click", (event) => {
    event.preventDefault();
    alert(translations["terminal.showcv.lines"][currentLang][0]);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = (() => {
    try {
      return localStorage.getItem("joaoalbero_cv_lang");
    } catch (e) {
      return null;
    }
  })();

  if (savedLang === "en" || savedLang === "pt") {
    currentLang = savedLang;
  } else {
    currentLang = "pt";
  }

  setLanguage(currentLang);
  toggleNightCard();
  setupFooterSecret();
  setupKonamiCode();
  setupTerminal();
  setupNightAck();
  setupLangToggle();
  setupCvCard();
});