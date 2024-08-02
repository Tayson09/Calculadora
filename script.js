function adicionarAoDisplay(value){
    let display = document.getElementById("display")
    
    if(display.value === '0' && display.value === '/'){
        display.value = value
    }else{
        display.value += value
    }
}

function limparDisplay(){
    let display = document.getElementById("display")

    display.value = ''
}

function calcular(){
    let display = document.getElementById('display');
    
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
