/* ============================================================
   Quiz dos Jubs — JavaScript
   ============================================================ */

// ============================================================
// PRESENTES
// Edite os nomes aqui quando decidir!
// ============================================================
const giftNames = [
  "Presente 1",
  "Presente 2",
  "Presente 3"
];

// ============================================================
// PERGUNTAS
// As letras "correct" em ordem formam: N-A-M-O-R-A-C-O-M-I-G-O
// Para adicionar foto numa pergunta: image: "fotos/nome.jpg"
// ============================================================
const questions = [
  // ── Pergunta 1 — SEM FOTO ──────────────────────────────────
  {
    text: "Qual a cor da calça que eu estava usando a <strong>primeira vez que nos vimos</strong>?",
    options: [
      { letter: "N", text: "Azul" },
      { letter: "K", text: "Preta" },
      { letter: "Z", text: "Bege" },
      { letter: "T", text: "Marrom" }
    ],
    correct: "N"
  },

  // ── Pergunta 2 — COM FOTO ──────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta2.jpg  (ou .png, .webp)
  {
    text: "Onde estávamos nesse momento?",
    image: "fotos/restaurante em boituva.jpg",   // ← troque pelo nome real do arquivo
    options: [
      { letter: "X", text: "Hotel em Boituva" },
      { letter: "A", text: "Restaurante em Boituva" },  // ← letra A da frase
      { letter: "Y", text: "Indo para o show em boituva" },
      { letter: "Z", text: "Zoológico" }
    ],
    correct: "A"
  },

  // ── Pergunta 3 — SEM FOTO ──────────────────────────────────
  {
    text: "Quem disse <strong>\"Eu te amo\"</strong> primeiro?",
    options: [
      { letter: "M", text: "Arthur" },
      { letter: "T", text: "Annalice" },
      { letter: "G", text: "Falamos juntos" },
      { letter: "R", text: "A gente não fala essa frase" }
    ],
    correct: "M"
  },

  // ── Pergunta 4 — COM FOTO ──────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta4.jpg
  {
    text: "O que a gente estava fazendo nessa foto?",
    image: "fotos/parque em sp.jpg",   // ← troque pelo nome real do arquivo
    options: [
      { letter: "O", text: "Fomos ao parque em sp" },  // ← letra O da frase
      { letter: "X", text: "Fomos andar pelo bosque" },
      { letter: "Y", text: "Fomos ao zoológico" },
      { letter: "Z", text: "Fomos ao cinema" }
    ],
    correct: "O"
  },

  // ── Pergunta 5 — SEM FOTO ──────────────────────────────────
  {
    text: "Pergunta 5 — <strong>substitua aqui</strong>",
    options: [
      { letter: "R", text: "Resposta certa" },
      { letter: "X", text: "Resposta errada" },
      { letter: "Y", text: "Resposta errada" },
      { letter: "Z", text: "Resposta errada" }
    ],
    correct: "R"
  },

  // ── Pergunta 6 — COM FOTO ──────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta6.jpg
  {
    text: "Onde estávamos nessa foto?",
    image: "fotos/show do lulu.jpg",   // ← troque pelo nome real do arquivo
    options: [
      { letter: "W", text: "Show do Luan Santana" },
      { letter: "A", text: "Show do Lulu" },  // ← letra A da frase
      { letter: "X", text: "Show do Gustavo Lima" },
      { letter: "Y", text: "Show do Michael Jackson" }
    ],
    correct: "A"
  },

  // ── Pergunta 7 — SEM FOTO ──────────────────────────────────
  {
    text: "Pergunta 7 — <strong>substitua aqui</strong>",
    options: [
      { letter: "C", text: "Resposta certa" },
      { letter: "X", text: "Resposta errada" },
      { letter: "Y", text: "Resposta errada" },
      { letter: "Z", text: "Resposta errada" }
    ],
    correct: "C"
  },

  // ── Pergunta 8 — COM FOTO ──────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta8.jpg
  {
    text: "Em que cidade essa foto foi tirada?",
    image: "fotos/sitio crispim.jpg",   // ← troque pelo nome real do arquivo
    options: [
      { letter: "X", text: "Nova Lima" },
      { letter: "O", text: "Rio Acima" },  // ← letra O da frase
      { letter: "Y", text: "Belo Horizonte" },
      { letter: "Z", text: "Lagoa Santa" }
    ],
    correct: "O"
  },

  // ── Pergunta 9 — SEM FOTO ──────────────────────────────────
  {
    text: "Pergunta 9 — <strong>substitua aqui</strong>",
    options: [
      { letter: "M", text: "Resposta certa" },
      { letter: "X", text: "Resposta errada" },
      { letter: "Y", text: "Resposta errada" },
      { letter: "Z", text: "Resposta errada" }
    ],
    correct: "M"
  },

  // ── Pergunta 10 — COM FOTO ─────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta10.jpg
  {
    text: "Onde estávamos nessa foto?",
    image: "fotos/vó rosa.jpg",  // ← troque pelo nome real do arquivo
    options: [
      { letter: "X", text: "Sítio do ti Carlinhos" },
      { letter: "I", text: "Casa vó Rosa" },  // ← letra I da frase
      { letter: "Y", text: "Casa do seu pai" },
      { letter: "Z", text: "Casa da sua mãe" }
    ],
    correct: "I"
  },

  // ── Pergunta 11 — SEM FOTO ─────────────────────────────────
  {
    text: "Pergunta 11 — <strong>substitua aqui</strong>",
    options: [
      { letter: "G", text: "Resposta certa" },
      { letter: "X", text: "Resposta errada" },
      { letter: "Y", text: "Resposta errada" },
      { letter: "Z", text: "Resposta errada" }
    ],
    correct: "G"
  },

  // ── Pergunta 12 — COM FOTO ─────────────────────────────────
  // Coloque o arquivo em: fotos/pergunta12.jpg
  {
    text: "Onde estávamos nessa foto?",
    image: "fotos/sitio do tio Carlinhos.jpg",  // ← troque pelo nome real do arquivo
    options: [
      { letter: "X", text: "Floresta" },
      { letter: "Y", text: "Resort" },
      { letter: "O", text: "Sítio do tio Carlinhos" },  // ← letra O da frase
      { letter: "Z", text: "Sítio do Crispim" }
    ],
    correct: "O"
  }
];

// ============================================================
// ESTADO DO QUIZ
// ============================================================
let current    = 0;
let answers    = new Array(questions.length).fill(null);
let giftOpened = false;

// ============================================================
// QUIZ — Renderização
// ============================================================
function renderQuestion() {
  const q     = questions[current];
  const total = questions.length;
  const pct   = Math.round(((current + 1) / total) * 100);

  document.getElementById('qNum').textContent          = current + 1;
  document.getElementById('qPct').textContent          = pct + '%';
  document.getElementById('progressFill').style.width  = pct + '%';
  document.getElementById('qLabel').textContent        = 'Pergunta ' + String(current + 1).padStart(2, '0');
  document.getElementById('qText').innerHTML           = q.text;

  // Foto opcional
  const card   = document.querySelector('.question-card');
  const oldImg = card.querySelector('.q-img');
  if (oldImg) oldImg.remove();
  if (q.image) {
    const img   = document.createElement('img');
    img.src     = q.image;
    img.alt     = 'Foto da pergunta ' + (current + 1);
    img.className = 'q-img';
    card.appendChild(img);
  }

  // Alternativas
  const area = document.getElementById('answersArea');
  area.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn' + (answers[current] === opt.letter ? ' selected' : '');
    btn.innerHTML = '<div class="answer-letter">' + opt.letter + '</div>'
                  + '<div class="answer-text">'   + opt.text   + '</div>';
    btn.addEventListener('click', () => selectAnswer(opt.letter));
    area.appendChild(btn);
  });

  document.getElementById('btnNext').disabled     = answers[current] === null;
  document.getElementById('btnBack').style.display = current === 0 ? 'none' : 'flex';
  document.getElementById('btnNext').textContent  = current === total - 1 ? 'Ver resultado →' : 'Próxima →';
}

function selectAnswer(letter) {
  answers[current] = letter;
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.querySelector('.answer-letter').textContent === letter);
  });
  document.getElementById('btnNext').disabled = false;
}

function goNext() {
  if (answers[current] === null) return;
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showFinal();
  }
}

function goBack() {
  if (current > 0) {
    current--;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================
// TELA FINAL — NAMORA COMIGO
// ============================================================
function showFinal() {
  document.getElementById('quizMain').style.display = 'none';
  document.getElementById('finalScreen').classList.add('active');

  const correctLetters = questions.map(q => q.correct);
  const namora         = correctLetters.slice(0, 6);
  const comigo         = correctLetters.slice(6, 12);
  const allCorrect     = questions.every((q, i) => answers[i] === q.correct);

  function buildRow(circlesId, wordId, letters, word, baseDelay, qOffset) {
    const container = document.getElementById(circlesId);
    container.innerHTML = '';
    letters.forEach((ch, i) => {
      const qIdx      = qOffset + i;
      const isCorrect = answers[qIdx] === questions[qIdx].correct;
      const div       = document.createElement('div');
      div.className   = 'circle-letter ' + (isCorrect ? 'correct' : 'wrong');
      div.textContent = ch;
      div.style.animationDelay = (baseDelay + i * 0.1) + 's';
      container.appendChild(div);
    });
    const wordEl = document.getElementById(wordId);
    wordEl.textContent        = word;
    wordEl.style.animationDelay = (baseDelay + letters.length * 0.1 + 0.15) + 's';
  }

  buildRow('namoraCircles', 'namoraWord', namora, 'NAMORA', 0.4, 0);
  buildRow('comigoCircles', 'comigoWord', comigo, 'COMIGO', 1.4, 6);

  const q = document.getElementById('finalQuestion');
  q.style.animationDelay = '2.6s';
  q.onclick = allCorrect ? goToGift : goToLose;
}

// ============================================================
// TELA DE DERROTA
// ============================================================
function goToLose() {
  document.getElementById('finalScreen').classList.remove('active');
  document.getElementById('loseScreen').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartQuiz() {
  current    = 0;
  answers    = new Array(questions.length).fill(null);
  giftOpened = false;
  document.getElementById('loseScreen').classList.remove('active');
  document.getElementById('finalScreen').classList.remove('active');
  document.getElementById('quizMain').style.display = '';
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// TELA DO PRESENTE
// ============================================================
function goToGift() {
  document.getElementById('finalScreen').classList.remove('active');
  document.getElementById('giftScreen').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openGift() {
  if (giftOpened) return;
  giftOpened = true;
  document.getElementById('giftBox').classList.add('shaking');
  setTimeout(() => {
    document.getElementById('giftScreen').classList.remove('active');
    initScratch();
    document.getElementById('scratchScreen').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1700);
}

// ============================================================
// RASPADINHAS
// ============================================================
function initScratch() {
  giftNames.forEach((name, i) => {
    document.getElementById('giftName' + i).textContent = name;
  });
  // Aguarda o DOM pintar para ter dimensões corretas
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      [0, 1, 2].forEach(i => setupCanvas(i));
    });
  });
}

function setupCanvas(idx) {
  const circle = document.getElementById('card'   + idx);
  const canvas = document.getElementById('canvas' + idx);
  const ctx    = canvas.getContext('2d', { willReadFrequently: true });
  const size   = circle.offsetWidth;
  canvas.width  = size;
  canvas.height = size;

  const cx = size / 2, cy = size / 2, r = size / 2;

  // Pinta a camada de raspar dentro do círculo
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle = '#6a1030';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#7a1838';
  for (let x = 8; x < size; x += 18) {
    for (let y = 8; y < size; y += 18) {
      const dx = x - cx, dy = y - cy;
      if (dx * dx + dy * dy < (r - 4) * (r - 4)) {
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  ctx.restore();

  ctx.globalCompositeOperation = 'destination-out';

  // Pré-conta pixels dentro do círculo para o cálculo de %
  let totalInCircle = 0;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      const dx = x - cx, dy = y - cy;
      if (dx * dx + dy * dy <= r * r) totalInCircle++;
    }
  }

  let scratching = false;
  let revealed   = false;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const src  = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left)  * (size / rect.width),
      y: (src.clientY - rect.top)   * (size / rect.height)
    };
  }

  function doScratch(e) {
    if (!scratching || revealed) return;
    e.preventDefault();
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();
    checkReveal();
  }

  function checkReveal() {
    ctx.globalCompositeOperation = 'source-over';
    const data = ctx.getImageData(0, 0, size, size).data;
    let transparent = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) transparent++;
    }
    ctx.globalCompositeOperation = 'destination-out';
    if (transparent / totalInCircle > 0.70) {
      revealed = true;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, size, size);
      canvas.style.pointerEvents = 'none';
    }
  }

  canvas.addEventListener('mousedown',  (e) => { scratching = true; doScratch(e); });
  canvas.addEventListener('mousemove',  doScratch);
  canvas.addEventListener('mouseup',    () => { scratching = false; });
  canvas.addEventListener('mouseleave', () => { scratching = false; });
  canvas.addEventListener('touchstart', (e) => { scratching = true; doScratch(e); }, { passive: false });
  canvas.addEventListener('touchmove',  doScratch, { passive: false });
  canvas.addEventListener('touchend',   () => { scratching = false; });
}

// ============================================================
// PÉTALAS DE FUNDO
// ============================================================
function createPetals() {
  const container = document.getElementById('petals');
  const colors    = ['#8a1530', '#c0445a', '#e8889a', '#6a1025', '#d06070'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.left              = Math.random() * 100 + '%';
    p.style.background        = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.animationDelay    = (Math.random() * 8) + 's';
    p.style.width             = (4 + Math.random() * 5) + 'px';
    p.style.height            = (6 + Math.random() * 8) + 'px';
    container.appendChild(p);
  }
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
createPetals();
renderQuestion();