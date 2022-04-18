
var texto = document.querySelector(".textoarea")
var resultadoTela = document.querySelector('#resultadocripto')
var nenhuma = document.querySelector('.nenhuma')
var botaocr = document.querySelector(".btn-cr")
var botaode = document.querySelector(".btn-de")



function criptografar() {    
    
    document.querySelector(".img-notexto").style.display = "none"
    document.querySelector(".digite").style.display = "none"

    var txto = texto.value
    var txt =  txto.replace(/e/igm, 'enter');
    var txt = txt.replace(/i/igm, 'imes');
    var txt = txt.replace(/a/igm, 'ai');
    var txt = txt.replace(/o/igm, 'ober');
    var txt = txt.replace(/u/igm, 'ufat')

    nenhuma.textContent = txt      
}

function descriptografar(){

    document.querySelector(".img-notexto").style.display = "none"
    document.querySelector(".digite").style.display = "none"

    var txto = texto.value
    var txt =  txto.replace(/enter/igm, 'e');
    var txt = txt.replace(/imes/igm, 'i');
    var txt = txt.replace(/ai/igm, 'a');
    var txt = txt.replace(/ober/igm, 'o');
    var txt = txt.replace(/ufat/igm, 'u')

    nenhuma.textContent = txt  
}




  botaocr.onclick = criptografar;
  botaode.onclick = descriptografar;