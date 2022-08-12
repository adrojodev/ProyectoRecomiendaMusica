// Primero haz un alerta con su nombre
let nombre;

window.addEventListener("load", () => {
  nombre = prompt("¿Cuál es tu nombre?");

  //Primero así sin espacio: alert("Hola" + nombre);
  //Que ellos agregen las oportunidades que te quedan
  alert("Hola " + nombre);
  alert("Mi nombre es Rojobot y quiero jugar contigo.");
});

function juegoAdivina() {
  let oportunidades = 3;

  let numeroRobot = Math.floor(Math.random() * (10 - 5) + 5);

  while (oportunidades > 0) {
    let numeroJugador = prompt(
      "¿En qué número entre el 5 y el 10 estoy pensando?"
    );

    if (numeroJugador == numeroRobot) {
      alert("Adivinaste 😡 era: " + numeroRobot);
      oportunidades = 0;
    } else if (numeroJugador > numeroRobot && numeroJugador <= 10) {
      alert(
        "Te vencí 😎 era uno más pequeño, te quedan " +
          (oportunidades - 1) +
          " oportunidades"
      );
      oportunidades = oportunidades - 1;
    } else if (numeroJugador < numeroRobot && numeroJugador >= 5) {
      alert(
        "Te vencí 😎 era uno más grande, te quedan " +
          (oportunidades - 1) +
          " oportunidades"
      );
      oportunidades = oportunidades - 1;
    } else {
      alert("Era un número entre el 5 y el 10, aprende a leer 🤖");
    }
  }
}
