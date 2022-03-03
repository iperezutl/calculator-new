//Antes quitar el 5+5 de la pantalla.

//Recuperamos el elemento display desde el HTML.
const display = document.querySelector('.display');
//Recuperamos todos los botónes de control desde el HTML.
const controlButtons = document.querySelector('.controls').children;
const allSymbols = ['+', '-', 'X', '/', '%', 'C', '='];

//Definiendo las variables para almacenar los valores: valor1, valor2, y el symbolo.
let firstValue = '';
let secondValue = '';
let symbol = '';
let result = '';

//Función para calcular
const calculate = () => {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if(symbol === '+') result = firstValue + secondValue;
    if(symbol === '-') result = firstValue - secondValue;
    if(symbol === 'X') result = firstValue * secondValue;
    if(symbol === '/') result = firstValue / secondValue;
    if(symbol === '%') result = firstValue % secondValue;

    display.innerText = result;
    firstValue = result;
    secondValue = '';
}

//Agregamos el evento a los botónes para que cuando se presione el botón se escriba el contenido en la pantalla
for(let button of controlButtons) {
    button.addEventListener('click', ()=>{
        //Dándole la estructuctura al botón
        const { innerText: btnValue } = button;
        //Verficamos si el texto del botón presionado es un símbolo de la lista.
        const btnValueIsSymbol = allSymbols.includes(btnValue);

        if(!secondValue && btnValue === '=') return null;

        if(btnValue === 'C'){
            firstValue = secondValue = symbol = '';
            return display.innerText = '';
        }

        if(firstValue && btnValueIsSymbol){
            secondValue && calculate()
            symbol = btnValue;
        }
        else if(!symbol) firstValue += btnValue;
        else if(symbol) secondValue += btnValue;

        //Escribimos y concatenamos en la pantalla el texto de botón que presionamos
        if(btnValue !== '=') display.innerText += btnValue; /*Mostrar*/
    })
}

