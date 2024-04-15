// Constantes:

const montanha_distante = document.getElementById("montanha_distante");

const montanha_frontal = document.getElementById("montanha_frontal");

const arbusto_alto = document.getElementById("arbusto_alto");

const arbusto_baixo = document.getElementById("arbusto_baixo");

const folha_esquerda = document.getElementById("folha_esquerda");

const folha_direita = document.getElementById("folha_direita");

const banner = document.getElementById("home").querySelector("aside");

// Funções:

function getResolution()
{

    if(window.innerWidth < 1250)
    {

        document.getElementById("container").style.display = "none";

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

    if(value <= document.getElementById("home").clientHeight)
    {

        montanha_distante.style.transform = "translateY(" + (-value  * 0.25) + "px)";

        montanha_frontal.style.transform = "translateY(" + (-value * 0.4) + "px)";

        folha_esquerda.style.transform = "translateX(" + (-value * 0.5) + "px)";

        folha_direita.style.transform = "translateX(" + (value  * 0.5) + "px)";

        banner.style.transform = "translateY(" + value + "px)";

    }

}

// Eventos:

window.onload = () => {

    getResolution();

};

document.body.onresize = () => {

    getResolution();

}

document.getElementById("container").onscroll = () => {

    parallaxEffect();

}