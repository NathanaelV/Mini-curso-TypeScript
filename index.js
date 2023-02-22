// Há a necessidade de explicitar que o input 1 e o input 2 são váriaveis que vêm do HTML
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.getElementById("button");
// Não há a necessidade de explicitar o tipo que a função irá retornar, pois o TS já sabe que number + number retorna um nubmer
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
