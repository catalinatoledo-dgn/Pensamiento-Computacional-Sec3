//Composition sur le mot Jaune (1946)
//Auguste Herbin

//Solemne 1
//Catalina Toledo

function setup() {
  createCanvas(400, 498);//tamaño lienzo
}

function draw() {
  background(255);//fondo blanco
strokeWeight(0); //grosor línea
  
  //Definir colores 
  let azul= color(55, 110, 174);
  let negro= color(	31, 30, 24);
  let morado= color(126, 64, 101);
  let naranja= color(246, 123, 21);
  let salmón= color(240, 85, 103);
  let rojo= color(253, 64, 32);
  let grisclaro= color(228, 227, 225);
  let amarillo= color(225, 191, 38);
  
  //figuras geométricas del fondo
  fill(azul);
  rect (0, 0, 141, 249);//rectángulo azul esquina superior izquierda
  
  fill(negro);
  rect (0, 249, 141, 52);//rectángulo negro, central hacia la izq
  
  fill(morado);
  rect(0, 301, 141, 197);//rectángulo morado esquina inferior izquierda
  
  fill(morado);
  rect(141, 0, 259, 131);//rectángulo morado esquina superior derecha
  
  fill(azul);
  rect(141, 301, 123, 86);//rectángulo azul, arriba de cuadrado rojo
  
  fill(salmón);
  rect(140, 250, 124, 51);//rectángulo central salmón
  
  fill(naranja);
  rect(141, 179, 123, 72);//rectángulo central naranjo
  
  fill(negro);
  rect(141, 128, 123, 51);//rectángulo central negro
  
  fill(negro);
  rect(264, 251, 136, 247);//rectángulo negro esquina inferior derecha
  
  fill(negro);
  rect(385, 128, 15, 123);//rectángulo negro, central hacia la derecha
  
  fill(grisclaro);
  quad(264, 128, 385, 128, 385, 251, 263, 251);//cuadrado gris claro
  
  fill(rojo);
  quad(141, 386, 264, 386, 264, 498, 141, 498);//cuadrado rojo
  
  
  //figuras sobrepuestas
  fill(amarillo);
  triangle(78, 14, 17, 249, 141, 249);//triángulo grande izq
  
  fill(grisclaro);
  ellipse(34, 27, 39, 39);//circulo pequeño, al lado de triangulo grande izq
  
  fill(salmón);
  ellipse(79, 365, 126, 126);//circulo inferior izq
  
  fill(naranja);
  ellipse(198, 70, 115, 115);//circulo central superior naranja
  
  fill(rojo);
  ellipse(330, 70, 115, 115);//circulo superior derecha rojo
  
  fill(grisclaro);
  ellipse(203, 344, 85, 85);//circulo central gris
  
  fill(rojo);
  ellipse(360, 269, 36, 36);//circulo pequeño derecha
  
  fill(grisclaro);
  triangle(203, 387, 142, 489, 264, 489);//triángulo inferior central gris
  
  fill(salmón);
  triangle(328, 251, 265, 489, 391, 489);//triángulo grande esquina derecha
  
  fill(azul);
  arc(79, 490, 125, 125, PI, TWO_PI, CHORD);//medio circulo esquina inferior izq
  
  fill(azul);
  arc(202, 251, 121, 121, PI, TWO_PI, CHORD);//medio circulo central azul
}