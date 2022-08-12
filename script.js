let albumPhotoActuales = [
  "quevedo.jpg",
  "unveranosinti.jpg",
  "unveranosinti.jpg",
  "kesariya.jpg",
  "provenza.jpg",
  "tefelicito.jpg",
];
let albumPhoto20 = [
  "camila.jpg",
  "collage.jpg",
  "uptown.jpg",
  "thankunext.jpg",
  "furious7.jpg",
  "loveinthefuture.jpg",
];
let albumPhoto30 = [
  "umbrella.jpg",
  "theeminemshow.jpg",
  "thefamemoster.jpg",
  "iamsashafierce.jpg",
  "oralfixationvol2.jpg",
  "hotshot.jpg",
];
let albumPhoto40 = [
  "fanmail.jpg",
  "anotherlevel.jpg",
  "millennium.jpg",
  "happynation.jpg",
  "gangstasparidse.jpg",
  "supernatural.jpg",
];

let albumActuales = [
  "Quevedo: Bzrp Music Sessions, Vol.52 - Single",
  "Un verano sin ti",
  "Un verano sin ti",
  "Kesariya - Single",
  "PROVENZA - Single",
  "Te felicito - Single",
];
let album20 = [
  "Camila",
  "Collage",
  "Uptown Special",
  "thank u, next",
  "Furious 7: Original Motion Picture Soundtrack",
  "Love In The Future",
];
let album30 = [
  "Umbrella",
  "The Eminem Show",
  "The Fame Monster",
  "I AM..SASHA FIERCE",
  "Oral Fixation, Vol. 2",
  "Hot Shot",
];
let album40 = [
  "Fanmail",
  "Another Level",
  "Millennium",
  "Happy Nation",
  "Gangsta's Paradise",
  "Supernatural",
];

let cancionActuales = [
  "Quevedo: Bzrp Music Sessions, Vol.52",
  "Me porto bonito",
  "Titi me preguntó",
  "Kesariya",
  "PROVENZA",
  "Te felicito",
];
let cancion20 = [
  "Havana",
  "Closer",
  "Uptown Funk",
  "7 rings",
  "See You Again",
  "All of Me",
];
let cancion30 = [
  "Umbrella",
  "Without Me",
  "Poker Face",
  "Halo",
  "Hips Don't Lie",
  "It Wasn't Me",
];
let cancion40 = [
  "No Scrubs",
  "No Diggity",
  "I Want It That Way",
  "The Sign",
  "Gangsta's Paradise",
  "Smooth",
];

let colorElegido;

function changeName(nombre) {
  document.getElementById("music-change-title").innerHTML =
    "Esta recomendación es para " + nombre;
}

function selectColor(color) {
  if (color == "radio-red") {
    colorElegido = 0;
  } else if (color == "radio-orange") {
    colorElegido = 1;
  } else if (color == "radio-yellow") {
    colorElegido = 2;
  } else if (color == "radio-green") {
    colorElegido = 3;
  } else if (color == "radio-blue") {
    colorElegido = 4;
  } else {
    colorElegido = 5;
  }
}

function calcularCancion() {
  let edad = document.getElementById("age-input").value;
  edad = parseInt(edad);

  if (edad <= 15) {
    document.getElementById("cancion-name").innerHTML =
      cancionActuales[colorElegido];
    document.getElementById("album-name").innerHTML =
      albumActuales[colorElegido];
    document.getElementById("album-container").style.backgroundImage =
      "url('albums/" + albumPhotoActuales[colorElegido] + "')";
  } else if (edad > 15 && edad <= 20) {
    document.getElementById("cancion-name").innerHTML = cancion20[colorElegido];
    document.getElementById("album-name").innerHTML = album20[colorElegido];
    document.getElementById("album-container").style.backgroundImage =
      "url('albums/" + albumPhoto20[colorElegido] + "')";
  } else if (edad > 20 && edad <= 30) {
    document.getElementById("cancion-name").innerHTML = cancion30[colorElegido];
    document.getElementById("album-name").innerHTML = album30[colorElegido];
    document.getElementById("album-container").style.backgroundImage =
      "url('albums/" + albumPhoto30[colorElegido] + "')";
  } else if (edad > 30) {
    document.getElementById("cancion-name").innerHTML = cancion40[colorElegido];
    document.getElementById("album-name").innerHTML = album40[colorElegido];
    document.getElementById("album-container").style.backgroundImage =
      "url('albums/" + albumPhoto40[colorElegido] + "')";
  }
}
