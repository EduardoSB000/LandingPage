const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "invalid.html";
});

const ib = document.getElementById("ib");
const it = document.getElementById("it");

ib.addEventListener("click", () => {
  it.innerText =
    "\nVocê provavelmente é mais inteligente que o Bremado." + "\n\nLinux.";
});

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let interval = setInterval(() => {
      input.value = "";
      clearInterval(interval);
    }, 500);
  });
});

// Define a função para diminuir a opacidade dos elementos
function fadeOutElements() {
  const elements = document.querySelectorAll('body *');
  elements.forEach((element) => {
    let opacity = element.style.opacity || 1;
    opacity -= 0.1;
    element.style.opacity = opacity;
  });
}

// Define o intervalo de tempo para chamar a função
setInterval(() => {
  fadeOutElements();
}, 10000);

// Define a função para diminuir a opacidade dos elementos
function fadeOutElements() {
  const elements = document.querySelectorAll('body *');
  elements.forEach((element) => {
    let opacity = element.style.opacity || 1;
    opacity -= 0.1;
    element.style.opacity = opacity;
  });
}

// Define o intervalo de tempo para chamar a função
setInterval(() => {
  fadeOutElements()
}, 5000)

const tryAgainButton = document.getElementById("try-again-button")
const body = document.getElementsByTagName("body")[0]

let opacity = 1

function fadeOut() {
  opacity -= 0.1
  body.style.opacity = opacity

  if (opacity <= 0) {
    clearInterval(interval)
    tryAgainButton.style.display = "block"
  }
}

const interval = setInterval(fadeOut, 5000)

      // Função para remover todas as tags <link> com a propriedade "rel" igual a "stylesheet"
      function removeCSS() {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        links.forEach((link) => link.remove());
      }

      // Função para remover todos os <script> tags
      function removeJS() {
        const scripts = document.querySelectorAll('script');
        scripts.forEach((script) => script.remove());
      }

      const removeCSSBtn = document.getElementById("remove-css-btn");
      const removeJSBtn = document.getElementById("remove-js-btn");

      removeCSSBtn.addEventListener("click", () => {
        removeCSS();
      });

      // Função para remover todos os elementos <html>
      function removeHTML() {
      const htmlElements = document.querySelectorAll('html');
      htmlElements.forEach((element) => element.remove());
}

const removeHtmlButton = document.getElementById("remove-html-btn");

removeHtmlButton.addEventListener("click", () => {
  removeHTML();
});
