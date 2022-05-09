//Desafio das cores
//Luana Yasmim Lourenço Nogueira

//Carregando a janela e iniciando a aplicação
window.addEventListener('load', start);

function start() {// A função start executará as outras funções do código
    definedColor();
    listener();
}

const definedColor=()=>{

    //Utilizando o dom para pegar os valores do RGB
    let range_red= document.querySelector('#range_red').value;
    let txt_red= document.querySelector('#txt_red');
    let range_green= document.querySelector('#range_green').value;
    let txt_green= document.querySelector('#txt_green');
    let range_blue= document.querySelector('#range_blue').value;
    let txt_blue= document.querySelector('#txt_blue');

    //Sincronizando o input range e text
    txt_red.value=range_red;
    txt_green.value=range_green;
    txt_blue.value=range_blue;

    //Informando valor obtido do rgb para a div colorbox
    let color=`rgb(${range_red}, ${range_green}, ${range_blue})`;
    painting(color);
}

const painting=(color)=>{
    // Acessando a div color box
    let colorbox= document.querySelector('#colorbox');
    //Utilizando a propriedade style para definir a cor
    colorbox.style.backgroundColor=color;
}

const listener=()=>{
    range_red.addEventListener('input', definedColor);
    range_green.addEventListener('input', definedColor);
    range_blue.addEventListener('input', definedColor);
}