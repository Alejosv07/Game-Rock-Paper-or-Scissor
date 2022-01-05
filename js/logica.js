let papel = document.getElementById("papel");
let piedra = document.getElementById("piedra");
let tijera = document.getElementById("tijera");
let btnStart = document.getElementById("btnStart");
let evento = document.getElementById("event");
let scoreUser = 0;
let scoreCpu = 0;

//Arreglo creado para ubicarse mentalmente let option = ["piedra","papel","tijera"];

let opUser;
let jugando = false;


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
    let opCpu = Math.floor(Math.random()*3);
    //Arreglo creado para ubicarse mentalmente let option = ["piedra","papel","tijera"];
    if (opCpu === 0 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu piedra, empate!";
    }
    else if (opCpu === 0 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu piedra, usuario gana!";
        scoreUser++;
    }
    else if (opCpu === 0 && opUser === 2) {
        evento.innerText = "Usuario uso tijera y cpu piedra, cpu gana!";
        scoreCpu++;
    }
    else if (opCpu === 1 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu papel, cpu gana!";
        scoreCpu++;
    }
    else if (opCpu === 1 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu papel, empate!";
    }
    else if (opCpu === 1 && opUser === 2) {
        evento.innerText = "Usuario uso tijera y cpu piedra, usuario gana!";
        scoreUser++;
    }else if (opCpu === 2 && opUser === 0) {
        evento.innerText = "Usuario uso piedra y cpu tijera, usuario gana!";
        scoreUser++;
    }
    else if (opCpu === 2 && opUser === 1) {
        evento.innerText = "Usuario uso papel y cpu tijera, cpu gana!";
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