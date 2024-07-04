document.addEventListener("DOMContentLoaded", function () {
  const newGameButton = document.querySelector(".new-game-button");

  newGameButton.addEventListener("click", function () {
    // Inicio do jogo
    // Ao ser clicado, "New game" deve sumir e ficar aparecendo "x turn" e "o turn", conforme a vez dos jogadores.
    // Quando o jogador "X" selecionar o seu gridItem, o lugar selecionado deve ficar com um "X" marcado
    // Quando o jogador "O" selecionar o seu gridItem, o lugar selecionado deve ficar com um "O" marcado

    const elemento = document.createElement("div");
    elemento.innerHTML = "x turn";
    elemento.style.display = "flex";
    elemento.style.backgroundColor = "#72CFF9";
    elemento.style.width = "300px";
    elemento.style.height = "50px";
    elemento.style.borderRadius = "5px";
    elemento.style.textAlign = "center";
    elemento.style.alignItems = "center";
    elemento.style.justifyContent = "center";
    elemento.style.fontFamily = "Fredoka";

    const elementoFilho = document.querySelector(".new-game-container");
    elementoFilho.insertBefore(elemento, elementoFilho.lastElementChild);

    newGameButton.style.display = "none";
  });
});

//const container = document.querySelector(".container");
// elementoPai.appendChild(elemento);

// let contador = 0;
// elemento.classList.add("new-game-button");
// elemento.addEventListener("click", function () {
// console.log("Oi");
// contador++;
// alert(contador);
// });
