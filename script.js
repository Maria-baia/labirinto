let labirinto = document.getElementById("labirinto");

let map = [
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
for(i=0;i<map.length;i++){
  map[i] = map[i].split("")
}
function mapa(){
  for (i = 0; i < map.length; i++) {
    let linha = document.createElement("div");
    linha.classList.add("linha");
    labirinto.appendChild(linha);
    for (j = 0; j < map[i].length; j++) {
      if (map[i][j] === "W") {
        let parede = document.createElement("div");
        parede.classList.add("w");
        linha.appendChild(parede);
      } else if (map[i][j] === " ") {
        let branco = document.createElement("div");
        branco.classList.add("branco");
        linha.appendChild(branco);
      } else if (map[i][j] === "S") {
        let start = document.createElement("div");
        start.classList.add("s");
        linha.appendChild(start);
      } else {
        let fim = document.createElement("div");
        fim.classList.add("f");
        linha.appendChild(fim);
      }
    }
  }
}

let boxTop = 450;
let boxLeft = 228;

let posicaox=9;
let posicaoy=0;

let bolinha = document.getElementById("patinho");

document.addEventListener("keydown", (event) => {
  let keyName = event.key;
  if (keyName === "ArrowUp") {
    if(map[posicaox-1][posicaoy]=='W') {
      retorno()
    }else{
      boxTop -= 40;
      posicaox -=1
    } 
    bolinha.style.top = boxTop + "px";
  }

  if (keyName === "ArrowLeft") {
    if(posicaoy != 0){  
      if(map[posicaox][posicaoy - 1]=='W') {
        retorno()
      }else{
        boxLeft -= 40;
        posicaoy -= 1
      }
      bolinha.style.left = boxLeft + "px";
    }
  }

  if (keyName === "ArrowRight") {
    if(map[posicaox][posicaoy+1]=='W') {
      retorno()
    }else{
      if(map[posicaox][posicaoy+1]=='F'){
        posicaoy +=1;
        boxLeft += 40;
        let venceu = document.createElement('div')
        venceu.classList.add('venceu')
        labirinto.appendChild(venceu)
        venceu.innerText = 'VOCÊ VENCEU!!!'
      }else{
      posicaoy +=1;
      boxLeft += 40;
    }
     
    }
    bolinha.style.left = boxLeft + "px";
  }
  if (keyName === "ArrowDown") {
    if(map[posicaox +1][posicaoy]=='W') {
      retorno()
    }else{
      posicaox +=1;
      boxTop += 40;
    }
    bolinha.style.top = boxTop + "px";
  }
});

function retorno(){
  document.location.reload(true)
}


mapa();