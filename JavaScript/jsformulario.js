//JavaScript para hallar el promedio de las notas
// Obtener los campos de entrada de nota
var nota1Input = document.getElementById("nota1");
var nota2Input = document.getElementById("nota2");
var nota3Input = document.getElementById("nota3");

// Escuchar el evento input en cada campo de entrada de nota
nota1Input.addEventListener("input", calcularPromedio);
nota2Input.addEventListener("input", calcularPromedio);
nota3Input.addEventListener("input", calcularPromedio);

function calcularPromedio() {
  // Obtener los valores de las notas
    var nota1 = parseFloat(nota1Input.value);
    var nota2 = parseFloat(nota2Input.value);
    var nota3 = parseFloat(nota3Input.value);

  // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;

  // Mostrar el resultado
    document.getElementById("resultado").textContent = promedio.toFixed(1);
}

// Capturar el formulario
var formulario = document.querySelector('form');{

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
    var nombres = document.getElementById("inputName").value;
    var apellidos = document.getElementById("inputLastName").value;
    var email = document.getElementById("inputEmail").value;
    var curso = document.getElementById("inputCourse").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

  // Calcular el promedio
    var promedio = (nota1 + nota2 + nota3) / 3;

  // Mostrar los resultados en el párrafo
    var resultados = "Nombres: " + nombres + "<br>" +
                "Apellidos: " + apellidos + "<br>" +
                "Email: " + email + "<br>" +
                "Curso: " + curso + "<br>" +
                "Promedio: " + promedio.toFixed(2);

    document.getElementById("resultados").innerHTML = resultados;
});
}