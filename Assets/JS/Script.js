// Constantes:

const container = document.getElementById("container");

const banner = document.getElementById("home").querySelector("aside");

const paisagem = [

    document.getElementById("montanha_distante"),
    document.getElementById("montanha_frontal"),
    document.getElementById("arbusto_alto"),
    document.getElementById("arbusto_baixo"),
    document.getElementById("folha_esquerda"),
    document.getElementById("folha_direita")

];

// Funções:

function getWindowHeight()
{

    if(window.innerHeight < 640)
    {

        resetParallaxEffect();

    }

}

function resetParallaxEffect()
{

    paisagem[0].style = "left: 0; right: 0; bottom: 0;";

    paisagem[1].style = "left: 0; right: 0; bottom: 0;";

    paisagem[2].style = "left: 0; right: 0; bottom: 0;";

    paisagem[3].style = "left: 0; right: 0; bottom: 0;";

    paisagem[4].style = "left: 0; right: 0; bottom: 0;";

    paisagem[5].style = "left: 0; right: 0; bottom: 0;";

    banner.style = "align-items: center; justify-content: center;";

}

function parallaxEffect()
{

    const value = container.scrollTop;

    if(value <= document.getElementById("home").clientHeight)
    {

        if(window.innerWidth > 1024)
        {

            paisagem[0].style.transform = "translateY(" + (-value  * 0.25) + "px)";

            paisagem[1].style.transform = "translateY(" + (-value * 0.3) + "px)";

        }

        else
        {

            paisagem[0].style.transform = "translateY(" + (-value  * 0.15) + "px)";

            paisagem[1].style.transform = "translateY(" + (-value * 0.1) + "px)";

        }

        paisagem[4].style.transform = "translateX(" + (-value * 0.5) + "px)";

        paisagem[5].style.transform = "translateX(" + (value  * 0.5) + "px)";

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

container.onscroll = () => {

    if(window.innerHeight >= 640)
    {

        parallaxEffect();

    }

}

document.getElementById("choice").onchange = () => {

    document.getElementById("navigation").href = document.getElementById("choice").value;

}