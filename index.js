const numeroDigitado = prompt("tabuada do numero:");
let n2 = 0;
let contador =1;
let resultado = 'Tabuada';

while(n2 < 10)
{
    n2 = n2 + 1;
    contador = numeroDigitado * n2;
    resultado = `${resultado}\n${numeroDigitado} x ${n2} = ${contador}`;
}

alert(resultado);