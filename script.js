const labirinto = document.getElementById('labirinto')
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
for(i=0; i<map.length; i++){
    const linha = document.createElement('div')
    linha.classList.add('linha')
    labirinto.appendChild(linha)
    for(j=0; j<map[i].length; j++){
        if(map[i][j] === 'W'){
            const parede = document.createElement('div')
            parede.classList.add('w')
            linha.appendChild(parede)
        }else if(map[i][j] === ' '){
            const branco = document.createElement('div')
            branco.classList.add('branco')
            linha.appendChild(branco)
        }else if(map[i][j] === 'S'){
           const start = document.createElement('div')
           start.classList.add('s')
           linha.appendChild(start)
        }else{
            const fim = document.createElement('div')
            fim.classList.add('f')
            linha.appendChild(fim) 
        }
    }
}
let boxTop = 378;
let boxLeft = 15;
const bolinha = document.createElement('div')
bolinha.classList.add('box')
labirinto.appendChild(bolinha)
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName === "ArrowUp"){
    boxTop -= 5
  }
  bolinha.style.top = boxTop + "px";
  
  if(keyName === "ArrowLeft"){
    boxLeft -= 5
  }
  bolinha.style.left = boxLeft + "px";
  
  if(keyName === "ArrowRight"){
    boxLeft += 5
  }
  bolinha.style.left = boxLeft + "px";
  
  if(keyName === "ArrowDown"){
    boxTop += 5
  }
  bolinha.style.top = boxTop + "px";

}); 