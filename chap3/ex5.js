let x = Math.floor((Math.random() * 100) + 1);

console.log(x);
var n = parseInt(prompt(`Enter a value ${x}`));
var nbofSteps = 1;

while (n != x) {
    n = parseInt(prompt(n < x ? "cest moins" : "cest plus"));
    nbofSteps++;
}
if (n == x) {
    console.log(`Bravo nb of tries ${nbofSteps} !!" la bonne réponse. est ${n}`);
}



