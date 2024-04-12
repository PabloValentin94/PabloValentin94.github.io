// Constantes:

const montanha_distante = document.getElementById("montanha_distante");

const montanha_frontal = document.getElementById("montanha_frontal");

const arbusto_alto = document.getElementById("arbusto_alto");

const arbusto_baixo = document.getElementById("arbusto_baixo");

const folha_esquerda = document.getElementById("folha_esquerda");

const folha_direita = document.getElementById("folha_direita");

// Funções:

function getResolution()
{

    document.getElementById("container").style.display = "none";

    if(window.innerWidth < 1250)
    {

        window.location.assign("https://PabloValentin94.github.io/Basic_Portfolio/Index.html");

    }

    else
    {

        document.getElementById("container").style.display = "flex";

    }

}

function parallaxEffect()
{

    const value = document.getElementById("container").scrollTop;

    montanha_distante.style.transform = "translateY(" + (-value  * 0.25) + "px)";

    montanha_frontal.style.transform = "translateY(" + (-value * 0.4) + "px)";

    folha_esquerda.style.transform = "translateX(" + (-value * 0.5) + "px)";

    folha_direita.style.transform = "translateX(" + (value  * 0.5) + "px)";

}

// Eventos:

window.onload = getResolution();

document.getElementById("container").onscroll = () => {

    parallaxEffect();

}