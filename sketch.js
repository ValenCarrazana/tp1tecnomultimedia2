//---DECLARACIONES TRIANGULOS Y PGRAFICS-------------------------------------------------------------------------
let t;
let g;

//------CLASIFICADOR-----
let classifier;
const options = { probabilityThreshold: 0.7 };
let label;
let etiqueta;
const classModel = 'https://teachablemachine.withgoogle.com/models/QCHnyUA0S/'; //url del modelo producido con Teachable Machine

//---SONIDO CONFIG------------------------------------------------------------------------------------------------
let AMP_MAX= 0.1;
let AMP_MIN= 0.01;
let IMPRIMIR = false;

//ENTRADA DE AUDIO
let mic;

//AMPLITUD
let amp;
let haySonido = false;


//---SETUP CONFIG-----------------------------------------------------------------------------------------------
function setup() {
  
  createCanvas(800,800,WEBGL, { antialias: true });

  fill(118,167,54);

  classifier.classify(gotResult);
  mic = new p5.AudioIn();
  mic.start();
  userStartAudio();

  t = new Triangulos();
  g = new Grafico();

  g.carga();

}

//--DRAW CONFIG-----------------------------------------------------------------------------------------------
function draw(){

  console.log(mouseX,mouseY);

  //config sonido
  amp = mic.getLevel();
  haySonido = amp > AMP_MIN;

  // if(haySonido && label !== "shh" && label !== "aplauso"  && label !== "silbido"  ){
  // g.dibujar_lineas();
  // }
  
  //dibujar triangulos
   t.dibujar();

 //dibujar la interaccion en pantalla
push();
translate(width/2-50,height/2-50);
g.dibujar();
pop();
}
  

//--------CLASIFICADOR-------------------------------------------------------------------------------
function preload() {
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier(classModel + 'model.json', options);
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  //console.log(results);
  // Show the first label and confidence
  label = results[0].label;
  etiqueta = label;
}



