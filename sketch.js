var form,user,app;
var database;
var state=0;
var newUser;
var userCount=0;
var homePage;


function setup() {
  createCanvas(800,400);
  database=firebase.database();
  
  app=new App();
  app.start();
}

function draw() {
 
  drawSprites();
}