import logoImg from './img/logo_2.png';

console.log("Prueba");

const texto:string = "¡¡¡Hola mundo!!!!";

document.getElementById('TextodesdeTS').innerHTML=texto;

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);

