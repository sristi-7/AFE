var form,user,app;
var database;
var state=0;
var newUser;
var userCount=0;
var homePage,allUsers;
var allfoods;
var food,foodCount=0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  database=firebase.database();
  
  
  app=new App();
  app.start();
}

function draw() {
 

}