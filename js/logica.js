let papel = document.getElementById("papel");
let piedra = document.getElementById("piedra");
let tijera = document.getElementById("tijera");
let btnStart = document.getElementById("btnStart");
let evento = document.getElementById("event");
let scoreUser = 0;
let scoreCpu = 0;


const svgContainer = document.getElementById("svg");
const svgContainer2 = document.getElementById("svg2");

const animationItem = lottie.loadAnimation({
  container: svgContainer, // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://lottie.host/1e89b6a2-6173-4f76-9c4d-e5bc2048e4b3/fTQJ7LiT1P.json", // the path to the animation json
});

const animationItemTryAgain = lottie.loadAnimation({
    container: svgContainer2, // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://lottie.host/f3110e24-c8ab-41bd-809a-7a18bc82e6c5/zQbSaJWvWs.json", // the path to the animation json
});

//Arreglo creado para ubicarse mentalmente let option = ["piedra","papel","tijera"];

let opUser;
let jugando = false;

const showAnimation = ()=>{
    svgContainer2.classList.contains("opacity0") ? svgContainer2.classList.replace("opacity0","opacity1") : svgContainer2.classList.add("opacity1");
}

const hideAnimation = ()=>{
    svgContainer2.classList.contains("opacity1") ? svgContainer2.classList.replace("opacity1","opacity0") : svgContainer2.classList.add("opacity0");
}

const constructor = ()=>{
    papel.addEventListener("click",()=>{
        opUser = 0;
        pintarSeleccion();
    });
    piedra.addEventListener("click",()=>{
        opUser = 1;
        pintarSeleccion();
    });
    tijera.addEventListener("click",()=>{
        opUser = 2;
        pintarSeleccion();
    });
    btnStart.addEventListener("click",()=>{
        jugando = true;
        valBtn();
        jugar();
    });

    animationItemTryAgain.addEventListener("complete",()=>{
        hideAnimation();
        console.log("finalizado");
    });
}

const valBtn = ()=>{
    if (jugando && opUser != undefined) {
        btnStart.innerText = "Intentar";
    }
}

const pintarSeleccion = ()=>{
    papel.style.backgroundColor = "transparent"
    piedra.style.backgroundColor = "transparent"
    tijera.style.backgroundColor = "transparent"
    if (opUser === 0) {
        papel.style.backgroundColor = "white"
    }else if (opUser === 1) {
        piedra.style.backgroundColor = "white"
    }else if (opUser === 2) {
        tijera.style.backgroundColor = "white"
    }
}

const pintarPuntos = ()=>{
    let scoreU = document.getElementById("scoreUser");
    let scoreC = document.getElementById("scoreCpu");
    scoreU.innerText = scoreUser;
    scoreC.innerText = scoreCpu;
}

const jugar = ()=>{
    console.log(animationItem);
    let opCpu = Math.floor(Math.random()*3);
    //Arreglo creado para ubicarse mentalmente let option = ["piedra","papel","tijera"];
    animationItem.stop();
    animationItemTryAgain.stop();
    if (opCpu === 0 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu piedra, empate!";
    }
    else if (opCpu === 0 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu piedra, usuario gana!";
        animationItem.play();
        scoreUser++;
    }
    else if (opCpu === 0 && opUser === 2) {
        evento.innerText = "Usuario uso tijera y cpu piedra, cpu gana!";
        showAnimation();
        animationItemTryAgain.play();
        scoreCpu++;
    }
    else if (opCpu === 1 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu papel, cpu gana!";
        showAnimation();
        animationItemTryAgain.play();
        scoreCpu++;
    }
    else if (opCpu === 1 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu papel, empate!";
    }
    else if (opCpu === 1 && opUser === 2) {
        evento.innerText = "Usuario uso tijera y cpu piedra, usuario gana!";
        animationItem.play();
        scoreUser++;
    }else if (opCpu === 2 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu tijera, usuario gana!";
        animationItem.play();
        scoreUser++;
    }
    else if (opCpu === 2 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu tijera, cpu gana!";
        showAnimation();
        animationItemTryAgain.play();
        scoreCpu++;
    }
    else if (opCpu === 2 && opUser === 2) {
        evento.innerText = "Usuario uso tijera y cpu tijera, empate!";
    }
    console.log('Usuario ' +opUser);
    console.log('Cpu '+opCpu);
    pintarPuntos();
}


constructor();