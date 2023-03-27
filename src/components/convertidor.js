
// const result = document.getElementById('resultado');
// const input1 = document.getElementById('input1');

// function convertidor() {
//   if (!input1.value) {
//     // document.getElementById('error').innerHTML = 'Ingrese un número';
//     // document.getElementById("error").classList.replace("hidden", "block");
//    return
//   }
  
//   document.getElementById("show-rs").classList.replace("hidden", "block");
//   const res = ((parseInt(input1.value) * 1.8) + 32).toFixed(2);
//   result.textContent = `${input1.value} Grados = ${res} Fahrenheit`;
  
  
// }


const result = document.getElementById('show-rs');
const input1 = document.getElementById('input1');
const titulo = document.getElementById('titulo')
const btn2 =document.getElementById('btn2')
let celsiusToFahrenheit =true

function convertir() {
  if (!input1.value) {
    // document.getElementById('error').innerHTML = 'Ingrese un número';
    // document.getElementById("error").classList.replace("hidden", "block");
   return
  }
  
  result.classList.replace("hidden", "block");

 
  if(celsiusToFahrenheit){
   const res = ((parseInt(input1.value) * 1.8) + 32).toFixed(2);
  result.innerHTML = `${input1.value} Grados Celsius son = ${res} Fahrenheit`;
  }else{
    const res = ((parseInt(input1.value) - 32) * 5 / 9).toFixed(2)
    result.innerHTML = `${input1.value} Grados Fahrenheit son = ${res} Grados Celsius.`;
  }
  
}
function cambiar() {
  celsiusToFahrenheit = !celsiusToFahrenheit
  if (celsiusToFahrenheit) {
    titulo.innerHTML = 'ingrese grados celsius para convertir a FAHRENHEIT'
    btn2.innerHTML = 'Fahrenheit'
  }else{
    titulo.innerHTML = 'ingrese grados Farenheit para convertir a Celsius'
    btn2.innerHTML = 'Celsius'
  }
  console.log('cambio')
  return
}