const numeroDigitado = prompt("tabuada do numero:");
const n2 = 0;
const contador =1;

while(n2 < 10)
{
    n2 = n2 + 1;
    contador = numeroDigitado * n2;
    const resposta = alert(`${numeroDigitado} x ${n2} = ${contador}`);
}