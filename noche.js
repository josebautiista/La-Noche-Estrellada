var n = document.getElementById("noche");
var lienzo = n.getContext("2d");

lienzo.fillStyle = "#1c6987";
lienzo.fillRect(0, 0, 1000, 500);



lienzo.beginPath();
lienzo.fillStyle= "#f5ff99";
lienzo.moveTo(1000, 250);
lienzo.lineTo(250, 350);
lienzo.lineTo(400, 500);
lienzo.lineTo(1000, 500);
lienzo.fill();


////viento
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-350,500,radianes("60"),radianes("180"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-360,500,radianes("60"),radianes("180"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-370,500,radianes("60"),radianes("180"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-380,500,radianes("60"),radianes("180"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-390,500,radianes("60"),radianes("180"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(200,-400,500,radianes("60"),radianes("180"));
lienzo.stroke();

lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,120,80,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,110,80,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,100,80,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,90,80,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,80,80,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(520,70,80,radianes("205"),radianes("160"));
lienzo.stroke();

lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,300,60,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,290,60,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,280,60,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,270,60,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,260,60,radianes("205"),radianes("160"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(800,250,60,radianes("205"),radianes("160"));
lienzo.stroke();

lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,200,60,radianes("30"),radianes("345"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,190,60,radianes("30"),radianes("345"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,180,60,radianes("30"),radianes("345"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,170,60,radianes("30"),radianes("345"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,160,60,radianes("30"),radianes("345"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(400,150,60,radianes("30"),radianes("345"));
lienzo.stroke();

lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,200,radianes("237"),radianes("338"));
lienzo.stroke();
lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,210,radianes("239"),radianes("332"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,220,radianes("240"),radianes("328"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,230,radianes("241"),radianes("324"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,240,radianes("243"),radianes("320"));
lienzo.stroke();lienzo.beginPath();
lienzo.strokeStyle = "white";
lienzo.arc(560,400,250,radianes("244"),radianes("318"));
lienzo.stroke();


/////circulos en viento
lienzo.beginPath();
lienzo.fillStyle = "#f0f0c2";
lienzo.arc(520,95,50,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#f0f0c2";
lienzo.arc(400, 175,30,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#f0f0c2";
lienzo.arc(800, 275,33,radianes("0"),radianes("360"));
lienzo.fill();


//////primeras montañas
lienzo.beginPath();
lienzo.fillStyle = "#0c0b24";
lienzo.arc(50,470,100,radianes("180"),radianes("310"));
lienzo.fill();

lienzo.beginPath();
lienzo.fillStyle= "#0c0b24";
lienzo.moveTo(0, 450)
lienzo.lineTo(150,378);
lienzo.lineTo(150,500)
lienzo.lineTo(0,500)
lienzo.fill();
lienzo.closePath();


////////piramide

lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(250,500,130,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(310,510,130,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(240,490,130,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(225,450,100,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(245, 400 )
lienzo.lineTo(303, 400);
lienzo.lineTo(220,0);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(310, 400 )
lienzo.lineTo(385, 410);
lienzo.lineTo(330,340);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(330,500,100,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(220,380,70,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(170, 330 )
lienzo.lineTo(250, 330);
lienzo.lineTo(225,120);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#360802";
lienzo.arc(240,250,80,radianes("90"),radianes("230"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(230, 220 )
lienzo.lineTo(230, 220);
lienzo.lineTo(210, 150);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(210, 100 )
lienzo.lineTo(230, 100);
lienzo.lineTo(220, 0);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#360802";
lienzo.moveTo(210, 100 );
lienzo.lineTo(230, 100);
lienzo.lineTo(230, 200);
lienzo.fill();


//////arco pequeño pegado al borde
lienzo.beginPath();
lienzo.fillStyle = "#d5e384";
lienzo.arc(20,200,10,radianes("0"),radianes("360"));
lienzo.fill();

///// circulo pegado izquierdo piramide
lienzo.beginPath();
lienzo.fillStyle = "#c5db46";
lienzo.arc(120,150,20,radianes("0"),radianes("360"));
lienzo.fill();

//////circulo punta piramide
lienzo.beginPath();
lienzo.fillStyle = "#d6aa18";
lienzo.arc(250,50,20,radianes("0"),radianes("360"));
lienzo.fill();

/////circulo pequeño bajo la punta
lienzo.beginPath();
lienzo.fillStyle = "#d5e384";
lienzo.arc(300,150,10,radianes("0"),radianes("360"));
lienzo.fill();

//////circulo grande blanco
lienzo.beginPath();
lienzo.fillStyle = "##f7f765";
lienzo.arc(330,250,40,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "yellow";
lienzo.arc(330,250,10,radianes("0"),radianes("360"));
lienzo.fill();

/////circulos pegados arriba
lienzo.beginPath();
lienzo.fillStyle = "yellow";
lienzo.arc(400,-10,20,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#yellow";
lienzo.arc(150,-10,20,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#e08a00";
lienzo.arc(650,8,20,radianes("0"),radianes("360"));
lienzo.fill();

//// sol
lienzo.beginPath();
lienzo.fillStyle = "#e08a00";
lienzo.arc(940,60,60,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#f7f765";
lienzo.arc(960,50,40,radianes("0"),radianes("360"));
lienzo.fill();

/////montañas lado derecho
lienzo.beginPath();
lienzo.fillStyle = "#0c0b24";
lienzo.arc(470,470,80,radianes("215"),radianes("80"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#0c0b24";
lienzo.moveTo(430, 450 );
lienzo.lineTo(430, 500);
lienzo.lineTo(750, 500);
lienzo.lineTo(750, 380);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#0c0b24";
lienzo.arc(770,450,80,radianes("0"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "#0c0b24";
lienzo.moveTo(800, 380 );
lienzo.lineTo(1000, 350);
lienzo.lineTo(1000, 500);
lienzo.lineTo(800, 500);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "#0c0b24";
lienzo.arc(980,400,80,radianes("0"),radianes("360"));
lienzo.fill();

/////casas
lienzo.beginPath();
lienzo.fillStyle= "gray";
lienzo.moveTo(480, 470 );
lienzo.lineTo(510, 470);
lienzo.lineTo(510, 500);
lienzo.lineTo(480, 500);
lienzo.lineTo(480, 470);
lienzo.lineTo(495, 450);
lienzo.lineTo(510, 470);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(490, 490 );
lienzo.lineTo(500, 490);
lienzo.lineTo(500, 500);
lienzo.lineTo(490, 500);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(485, 480 );
lienzo.lineTo(490, 480);
lienzo.lineTo(490, 485);
lienzo.lineTo(485, 485);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(500, 480 );
lienzo.lineTo(505, 480);
lienzo.lineTo(505, 485);
lienzo.lineTo(500, 485);
lienzo.fill();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(480, 470 );
lienzo.lineTo(510, 470);
lienzo.lineTo(510, 500);
lienzo.lineTo(480, 500);
lienzo.lineTo(480, 470);
lienzo.lineTo(495, 450);
lienzo.lineTo(510, 470);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "white";
lienzo.moveTo(560, 470 );
lienzo.lineTo(600, 470);
lienzo.lineTo(600, 500);
lienzo.lineTo(560, 500);
lienzo.lineTo(560, 470);
lienzo.lineTo(580, 350);
lienzo.lineTo(600, 470);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(575, 480 );
lienzo.lineTo(590, 480);
lienzo.lineTo(590, 500);
lienzo.lineTo(575, 500);
lienzo.fill();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(560, 470 );
lienzo.lineTo(600, 470);
lienzo.lineTo(600, 500);
lienzo.lineTo(560, 500);
lienzo.lineTo(560, 470);
lienzo.lineTo(580, 350);
lienzo.lineTo(600, 470);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "red";
lienzo.moveTo(520, 470 );
lienzo.lineTo(550, 470);
lienzo.lineTo(550, 500);
lienzo.lineTo(520, 500);
lienzo.lineTo(520, 470);
lienzo.lineTo(535, 450);
lienzo.lineTo(550, 470);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(530, 490 );
lienzo.lineTo(540, 490);
lienzo.lineTo(540, 500);
lienzo.lineTo(530, 500);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(525, 480 );
lienzo.lineTo(530, 480);
lienzo.lineTo(530, 485);
lienzo.lineTo(525, 485);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(540, 480 );
lienzo.lineTo(545, 480);
lienzo.lineTo(545, 485);
lienzo.lineTo(540, 485);
lienzo.fill();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(520, 470 );
lienzo.lineTo(550, 470);
lienzo.lineTo(550, 500);
lienzo.lineTo(520, 500);
lienzo.lineTo(520, 470);
lienzo.lineTo(535, 450);
lienzo.lineTo(550, 470);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "green";
lienzo.moveTo(610, 470 );
lienzo.lineTo(650, 470);
lienzo.lineTo(650, 500);
lienzo.lineTo(610, 500);
lienzo.lineTo(610, 470);
lienzo.lineTo(630, 450);
lienzo.lineTo(650, 470);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(625, 480 );
lienzo.lineTo(640, 480);
lienzo.lineTo(640, 500);
lienzo.lineTo(625, 500);
lienzo.fill();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(610, 470 );
lienzo.lineTo(650, 470);
lienzo.lineTo(650, 500);
lienzo.lineTo(610, 500);
lienzo.lineTo(610, 470);
lienzo.lineTo(630, 450);
lienzo.lineTo(650, 470);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "green";
lienzo.moveTo(700, 460 );
lienzo.lineTo(750, 460);
lienzo.lineTo(750, 490);
lienzo.lineTo(700, 490);
lienzo.fill();
lienzo.closePath();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(700, 460 );
lienzo.lineTo(750, 460);
lienzo.lineTo(750, 490);
lienzo.lineTo(700, 490);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "yellow";
lienzo.moveTo(780, 440 );
lienzo.lineTo(830, 440);
lienzo.lineTo(830, 470);
lienzo.lineTo(780, 470);
lienzo.fill();
lienzo.closePath();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(780, 440 );
lienzo.lineTo(830, 440);
lienzo.lineTo(830, 470);
lienzo.lineTo(780, 470);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "blue";
lienzo.moveTo(760, 440 );
lienzo.lineTo(810, 440);
lienzo.lineTo(810, 410);
lienzo.lineTo(760, 410);
lienzo.fill();
lienzo.closePath();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(760, 440 );
lienzo.lineTo(810, 440);
lienzo.lineTo(810, 410);
lienzo.lineTo(760, 410);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle= "gray";
lienzo.moveTo(650, 420 );
lienzo.lineTo(680, 420);
lienzo.lineTo(680, 460);
lienzo.lineTo(650, 460);
lienzo.lineTo(650, 420);
lienzo.lineTo(680, 420);
lienzo.lineTo(665, 400);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(660, 460 );
lienzo.lineTo(670, 460);
lienzo.lineTo(670, 450);
lienzo.lineTo(660, 450);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(655, 440 );
lienzo.lineTo(660, 440);
lienzo.lineTo(660, 430);
lienzo.lineTo(655, 430);
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle= "black";
lienzo.moveTo(670, 440 );
lienzo.lineTo(675, 440);
lienzo.lineTo(675, 430);
lienzo.lineTo(670, 430);
lienzo.fill();
lienzo.beginPath();
lienzo.strokeStyle= "black";
lienzo.moveTo(650, 420 );
lienzo.lineTo(680, 420);
lienzo.lineTo(680, 460);
lienzo.lineTo(650, 460);
lienzo.lineTo(650, 420);
lienzo.lineTo(680, 420);
lienzo.lineTo(665, 400);
lienzo.stroke();
lienzo.closePath();

/////pasto
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(900,420,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(930,410,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(950,400,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(870,430,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(950,450,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(920,440,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(920,470,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(880,470,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(870,490,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(980,390,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(980,420,30,radianes("180"),radianes("360"));
lienzo.fill();
lienzo.beginPath();
lienzo.fillStyle = "green";
lienzo.arc(980,480,30,radianes("180"),radianes("360"));
lienzo.fill();










function radianes(grados)
{
  var radianes=(Math.PI/180)*grados;
  return radianes;

}
