function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

var elementosclicaveis = document.querySelectorAll('.clicavel')
var editaveis = document.querySelectorAll('.editaveis')
var valor = ["a", "a", "A", "A"]

var valordoseditaveis = ["Aa","Aa","Aa","Aa"]

elementosclicaveis.forEach((element, i) => {
    element.addEventListener("click", () => {
        if (valor[i] == valor[i].toUpperCase()) {
            valor[i] = "a"
            element.innerHTML = `<span>${valor[i]}</span>`
        }
        else {
            valor[i] = "A"
            element.innerHTML = `<span>${valor[i]}</span>`
        }
        if (valor[0] == valor[2]) {
            if (valor[0] == valor[0].toUpperCase()) {
                editaveis[0].innerHTML = `<span>AA</span>`
                valordoseditaveis[0] = "AA"
            } else {
                editaveis[0].innerHTML = `<span>aa</span>`
                valordoseditaveis[0] = "aa"
            }
        }
        else {
            editaveis[0].innerHTML = `<span>Aa</span>`
            valordoseditaveis[0] = "Aa"
        }

        if (valor[0] == valor[3]) {
            if (valor[0] == valor[0].toUpperCase()) {
                editaveis[2].innerHTML = `<span>AA</span>`
                valordoseditaveis[2] = "AA"
            } else {
                editaveis[2].innerHTML = `<span>aa</span>`
                valordoseditaveis[2] = "aa"
            }
        }
        else {
            editaveis[2].innerHTML = `<span>Aa</span>`
            valordoseditaveis[2] = "Aa"
        }


        if (valor[1] == valor[2]) {
            if (valor[1] == valor[1].toUpperCase()) {
                editaveis[1].innerHTML = `<span>AA</span>`
                valordoseditaveis[1] = "AA"
            } else {
                editaveis[1].innerHTML = `<span>aa</span>`
                valordoseditaveis[1] = "aa"
            }
        }
        else {
            editaveis[1].innerHTML = `<span>Aa</span>`
            valordoseditaveis[1] = "Aa"
        }

        if (valor[1] == valor[3]) {
            if (valor[1] == valor[1].toUpperCase()) {
                editaveis[3].innerHTML = `<span>AA</span>`
                valordoseditaveis[3] = "AA"
            } else {
                editaveis[3].innerHTML = `<span>aa</span>`
                valordoseditaveis[3] = "aa"
            }
        }
        else {
            editaveis[3].innerHTML = `<span>Aa</span>`
            valordoseditaveis[3] = "Aa"
        }

    })
})

function animation() {
    var tabela = document.getElementsByTagName("table")[0]
    tabela.style.transform = "translateX(-50%) translateY(-50%)"
}

var botao = document.querySelectorAll(".botao")[0]
var clicado = false

botao.style.left = `${innerWidth}px`
botao.style.top = `${innerHeight}px`
window.addEventListener("resize", ()=>{
    botao.style.left = `${innerWidth}px`
    botao.style.top = `${innerHeight}px`
})

botao.addEventListener("click",()=>{
    setCookie('digitos', valordoseditaveis)
    setCookie('valores', valor)
    setCookie('clicado','true')
    window.location.href = "detalhes.html"
})


window.addEventListener("close", ()=>{
    setCookie('clicado', false)
})


