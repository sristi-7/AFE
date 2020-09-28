var form,user,app;
var database;
var state=0;




function setup() {
  createCanvas(800,400);
  database=firebase.database();
  

 app=new App();
 app.start();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}