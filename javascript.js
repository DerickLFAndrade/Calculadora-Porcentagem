var conta = document.getElementById('quantidade')
var custom = document.getElementById('custom')

var op1 = document.getElementById("op1")
var op2 = document.getElementById("op2")

var botao = document.getElementById("botReset")
var vl1 = document.getElementById("valor1")
var vl2 = document.getElementById("valor2")
var valid 
$('#logoImg').fadeOut(0)
$('#logoImg').fadeIn(1000)

function borda() {

    conta.style.textAlign = 'right'
    conta.style.border = 'solid 4px'
    conta.style.borderColor = 'none'
    focus()

    custom.style.border = 'none'
    

}
function bordaCust() {

    custom.style.textAlign = 'right'
    custom.style.borderColor = 'hsl(172, 67%, 45%)'

    conta.style.border = 'none'




}



function opc1() {
   valid = 0
    op1.style.background = 'hsl(46, 76%, 61%)'
    op1.style.color = 'hsl(7, 49%, 27%)'

    op2.style.background = 'hsl(32, 49%, 29%)'
    op2.style.color = 'hsl(46, 76%, 61%)'

   
   
    conta.style.border = 'none'
    custom.style.border = 'none'

    custom.placeholder = 'Escolher'
    custom.style.textAlign = 'center'
}


function opc2() {
    valid = 1
    op2.style.background = 'hsl(46, 76%, 61%)'
    op2.style.color = 'hsl(7, 49%, 27%)'

    op1.style.background = 'hsl(32, 49%, 29%)'
    op1.style.color = 'hsl(46, 76%, 61%)'



    conta.style.border = 'none'
    custom.style.border = 'none'

    custom.placeholder = 'Escolher'
    custom.style.textAlign = 'center'
}




function focs() {
    conta.style.border = 'none'
    custom.style.border = 'none'
   
}

function bot() {
    botao.style.background = 'rgb(194, 154, 95)'
    botao.style.color = 'hsl(46, 76%, 61%)'
}
function bot2() {
    botao.style.background = 'hsl(46, 76%, 61%)'
    botao.style.color = 'hsl(7, 49%, 27%)'
}
function resetar() {
   
    custom.value = ''
    conta.value = ''
   
    op1.style.backgroundColor = 'hsl(32, 49%, 29%)'
    op1.style.color = 'hsl(46, 76%, 61%)'

    op2.style.background = 'hsl(32, 49%, 29%)'
    op2.style.color = 'hsl(46, 76%, 61%)'

   
    vl1.innerHTML = 'R$ 0.00'
    vl2.innerHTML = 'R$ 0.00'
}


function calc() { //Calcula a porcentagem selecionada da gorjeta de acordo com o valor da conta e divide a conta com o número de pessoas informado.
   
    op1.addEventListener('click', calcular)
    op2.addEventListener('click', calcular)
   addEventListener('input', calcular)
    
    function calcular() {
        var porcentagem

        if (valid == 0) {

            opval1 = parseFloat(conta.value)
            porcentagem = opval1 * 5 / 100
            opval1 += porcentagem
            resultado = opval1

            vl1.innerHTML = `$${porcentagem.toFixed(2)}`
            vl2.innerHTML = `$${resultado.toFixed(2)}`


        }
        else if (valid == 1) {
            opval1 = parseFloat(conta.value)
            porcentagem = opval1 * 10 / 100
            opval1 += porcentagem
            resultado = opval1
            vl1.innerHTML = `$${porcentagem.toFixed(2)}`
            vl2.innerHTML = `$${resultado.toFixed(2)}`


        }

        else if (custom.style.border) {
            opval1 = parseFloat(conta.value)
            opvalCustom = parseFloat(custom.value)
            porcentagem = opval1 * opvalCustom / 100
            opval1 += porcentagem
            resultado = opval1
            if (conta.value && custom.value) {
                vl1.innerHTML = `$${porcentagem.toFixed(2)}`
                vl2.innerHTML = `$${resultado.toFixed(2)}`
            }
        }


    } 
} 

addEventListener('input', calc) //Chama a função ao adicionar algum valor em qualquer input


botao.addEventListener('click', resetar) //reseta todos os campos
botao.addEventListener('mouseenter', bot) //chama um evento no botão para mudar o background quando o mouse estiver em cima
botao.addEventListener('mouseout', bot2) //Volta o background original
op1.addEventListener('click', opc1)
op2.addEventListener('click', opc2)

conta.addEventListener('click', borda)
custom.addEventListener('click', bordaCust)

document.addEventListener('click', focs)
