// Há a necessidade de explicitar que o input 1 e o input 2 são váriaveis que vêm do HTML
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;

// Não há a necessidade de explicitar o tipo que a função irá retornar, pois o TS já sabe que number + number retorna um nubmer
function sum(a: number, b: number): number {
  return a + b;
}

button.addEventListener("click", function() {
  console.log(sum(Number(input1.value), Number(input2.value)));
});
