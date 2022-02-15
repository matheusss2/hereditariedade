var botao02 = document.querySelector(".botao2")
botao02.style.top = `${innerHeight - botao02.clientHeight - 10}px`
var valores = getCookie('valores').split(',')
var digitos = getCookie('digitos').split(',')
var divprincipal = document.querySelector(".principalcontainer")

function testar(params) {
    if (params == valores[0]) {
        if (params == params.toUpperCase()) {
            return "AA"
        }else{
            return "aa"
        }
    }else{
        return "Aa"
    }
}
function testar2(params) {
    if (params == valores[1]) {
        if (params == params.toUpperCase()) {
            return "AA"
        }else{
            return "aa"
        }
    }else{
        return "Aa"
    }
}
var msg1 = `<p>Dados os fatores ${valores[0] + valores[1]} e ${valores[2] + valores[3]}, obtivemos os descendentes ${digitos[0]}, ${digitos[1]}, ${digitos[2]}, ${digitos[3]}, A seguir será representado o processo para chegar a essas combinações:
<div>
    <section>
    <p>
        Gametas masculinos: ${valores[0]} e ${valores[1]}<br/>
        Gametas feminino: ${valores[2]} e ${valores[3]}<br/></p>
        <p style="margin-bottom: 0px;">
        Usando o gameta masculino: <span style="border-bottom: 1px solid black;">${valores[0]}</span> e os gametas femininos  <span style="border-bottom: 1px solid black;">${valores[2]}</span> e <span style="border-bottom: 1px solid black;">${valores[3]}</span>, obtemos:</p>

        <div>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[0]}</span></div>
            <span style="font-size: 1.5em;">&RightArrow;</span>

            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[2]}</span></div>
            <span style="font-size: 1.5em;">&RightArrow;</span>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${testar(valores[2])}</span></div>
            
            <br/>
            <span style="width: 30px; text-align: center; display: inline-block; font-size: 1.5em; ">&DownArrow;</span><br/>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[3]}</span></div><br/>
            <span style="width: 30px; text-align: center; display: inline-block; font-size: 1.5em; ">&DownArrow;</span><br/>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${testar(valores[3])}</span></div>
        </div>
        <p style="margin-top: 20px; margin-bottom: 0px;">
        Usando o gameta masculino: <span style="border-bottom: 1px solid black;">${valores[1]}</span> e os gametas femininos  <span style="border-bottom: 1px solid black;">${valores[2]}</span> e <span style="border-bottom: 1px solid black;">${valores[3]}</span>, obtemos:</p>
        <div style="padding-bottom: 60px;">
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[1]}</span></div>
            <span style="font-size: 1.5em;">&RightArrow;</span>

            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[2]}</span></div>
            <span style="font-size: 1.5em;">&RightArrow;</span>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${testar2(valores[2])}</span></div>
            
            <br/>
            <span style="width: 30px; text-align: center; display: inline-block; font-size: 1.5em; ">&DownArrow;</span><br/>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${valores[3]}</span></div><br/>
            <span style="width: 30px; text-align: center; display: inline-block; font-size: 1.5em; ">&DownArrow;</span><br/>
            <div style="text-aling: center; width: 20px; margin: 0; display: inline-block; padding: 7px; background-color: #ababab;"><span style="display: inline-block; width: 100%; text-align: center;">${testar2(valores[3])}</span></div>
        </div#ababab
    </section>
</div>
`

var txt  = `
    
    `



window.addEventListener("load", () => {
    console.log(valores)
    divprincipal.innerHTML += msg1 + txt
})




function mais() {
    var para = document.getElementsByTagName("p")[0]
    para.style.fontSize = "2em"
}
