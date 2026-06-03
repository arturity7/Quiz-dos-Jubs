# 💕 Quiz dos Jubs

> Um quiz interativo de namoro feito com muito amor — pensado para celular, com raspadinhas e uma surpresa no final.

🔗 **Repositório:** [github.com/arturity7/Quiz-dos-Jubs](https://github.com/arturity7/Quiz-dos-Jubs.git)

---

## 📱 Sobre o projeto

O **Quiz dos Jubs** é um site mobile-first criado como presente de namoro. A pessoa responde 12 perguntas sobre o relacionamento — algumas com fotos de momentos especiais — e, se acertar todas, descobre uma mensagem surpresa e raspa 3 bilhetes para revelar seus presentes.

---

## ✨ Funcionalidades

- 12 perguntas com alternativas personalizadas
- Suporte a **fotos** em perguntas alternadas
- Barra de progresso animada
- Tela de resultado com as letras certas e erradas destacadas em **verde** e **vermelho**
- As respostas certas formam a frase **NAMORA COMIGO**
- **Condição de vitória:** só ganha o presente se acertar tudo
- Tela de derrota com botão para tentar novamente
- Presente animado (flutuando) que vibra ao ser tocado
- **3 raspadinhas** — esfrega o dedo para revelar cada presente
- Pétalas caindo no fundo durante todo o quiz
- Visual em tons de vinho e bordô, otimizado para celular

---

## 🗂️ Estrutura do projeto

```
quiz-jubs/
├── index.html       # Estrutura HTML das telas
├── style.css        # Todo o visual e animações
├── script.js        # Lógica do quiz, perguntas e raspadinhas
└── fotos/           # Fotos usadas nas perguntas pares
    ├── pergunta2.jpg
    ├── pergunta4.jpg
    ├── pergunta6.jpg
    ├── pergunta8.jpg
    ├── pergunta10.jpg
    └── pergunta12.jpg
```

---

## ✏️ Como personalizar

### Trocar as perguntas e respostas

Edite o array `questions` no início do arquivo `script.js`. Cada objeto representa uma pergunta:

```js
{
  text: "Texto da pergunta com <strong>destaque</strong>",
  image: "fotos/pergunta2.jpg",  // opcional — remova a linha se não tiver foto
  options: [
    { letter: "N", text: "Texto da alternativa" },
    { letter: "X", text: "Outra alternativa" },
    ...
  ],
  correct: "N"  // letra da alternativa certa
}
```

> ⚠️ As letras `correct` das 12 perguntas, em ordem, devem formar a frase:
> **N · A · M · O · R · A · C · O · M · I · G · O**

### Trocar os nomes dos presentes

No topo do `script.js`, edite o array `giftNames`:

```js
const giftNames = [
  "Nome do presente 1",
  "Nome do presente 2",
  "Nome do presente 3"
];
```

### Adicionar fotos

1. Coloque o arquivo de imagem (`.jpg`, `.png` ou `.webp`) dentro da pasta `fotos/`
2. No `script.js`, aponte o caminho na propriedade `image` da pergunta correspondente:

```js
image: "fotos/pergunta4.jpg"
```

---

## 🚀 Como rodar localmente

Basta abrir o `index.html` direto no navegador — não precisa de servidor ou dependências.

```bash
# Se quiser usar o Live Server do VSCode:
# clique com o botão direito no index.html → "Open with Live Server"
```

---

## 🌐 Deploy com GitHub Pages

1. Suba o projeto no repositório
2. Vá em **Settings → Pages**
3. Em *Branch*, selecione `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos — o site estará disponível em:
   `https://arturity7.github.io/Quiz-dos-Jubs`

Para usar um **domínio próprio**, adicione um arquivo `CNAME` na raiz com o seu domínio e configure o DNS do seu provedor apontando para o GitHub Pages.

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (animações, variáveis, gradientes)
- JavaScript puro (sem frameworks ou dependências)
- Canvas API (raspadinhas)
- Google Fonts — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) + [Lato](https://fonts.google.com/specimen/Lato)

---

## 💌 Autor

Feito com ❤️ por **Arthur** para a **Annalice**.
