function insert(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num
}
function limpar(){
    document.getElementById('res').innerHTML = ' '
}
function back(){
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1)
}
function calculadora(){
    var res = document.getElementById('res').innerHTML;
    if(res){  //Se tiver coisa dentro do "res", execute o cod abaixo:
        document.getElementById('res').innerHTML = eval(res);
    }else{
        document.getElementById(res).innerHTML = '[ERRO]'
    }
}