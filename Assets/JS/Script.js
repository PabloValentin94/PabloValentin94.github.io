// Constantes:

const container = document.getElementById("container");

const banner = document.getElementById("home").querySelector("aside");

const montanha_distante = document.getElementById("montanha_distante");

const montanha_frontal = document.getElementById("montanha_frontal");

const arbusto_alto = document.getElementById("arbusto_alto");

const arbusto_baixo = document.getElementById("arbusto_baixo");

const folha_esquerda = document.getElementById("folha_esquerda");

const folha_direita = document.getElementById("folha_direita");

// Funções:

function getWindowHeight()
{

    if(window.innerHeight < 640)
    {

        container.onscroll = null;

    }

    else
    {

        container.onscroll = () => {

            parallaxEffect();
        
        }

    }

}

function parallaxEffect()
{

    const value = document.getElementById("container").scrollTop;

    if(value <= document.getElementById("home").clientHeight)
    {

        if(window.innerWidth > 1024)
        {

            montanha_distante.style.transform = "translateY(" + (-value  * 0.25) + "px)";

            montanha_frontal.style.transform = "translateY(" + (-value * 0.3) + "px)";

        }

        else
        {

            montanha_distante.style.transform = "translateY(" + (-value  * 0.15) + "px)";

            montanha_frontal.style.transform = "translateY(" + (-value * 0.1) + "px)";

        }

        folha_esquerda.style.transform = "translateX(" + (-value * 0.5) + "px)";

        folha_direita.style.transform = "translateX(" + (value  * 0.5) + "px)";

        banner.style.transform = "translateY(" + value + "px)";

    }

}

// Eventos:

window.onload = () => {

    getWindowHeight();

}

window.onresize = () => {

    getWindowHeight();

}

document.getElementById("choice").onchange = () => {

    document.getElementById("navigation").href = document.getElementById("choice").value;

}