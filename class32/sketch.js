const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);

    }
    // add condition to check if any background image is there to add
    


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(responseJSON);
   
    // write code slice the datetime
    var dateTime = responseJSON.datetime;
    console.log("TIME: "+ dateTime);

    // add conditions to change the background images from sunrise to sunset
    var hour = dateTime.slice(11,13);
    
    if(hour >=04 && hour <=06){
        backgroundImg = "sunrise1.png";
    }else if(hour >=06 && hour <=08){
        backgroundImg = "sunrise2.png";
    }else if(hour >=08 && hour <=10){
        backgroundImg = "sunrise3.png";
    }else if(hour >=10 && hour <=12){
        backgroundImg = "sunrise4.png";
    }else if(hour >=12 && hour <=14){
        backgroundImg = "sunrise5.png";
    }else if(hour >=14 && hour <=16){
        backgroundImg = "sunrise6.png";
    }else if(hour =23 && hour ==0){
        backgroundImg = "sunset7.png";
    }else if(hour =0 && hour <03){
        backgroundImg = "sunset8.png";
    }else if(hour =0 && hour <05){
        backgroundImg = "sunset9.png";
    }else if(hour =0 && hour <07){
        backgroundImg = "sunset10.png";
    }else if(hour =0 && hour <09){
        backgroundImg = "sunset11.png";
    }else if(hour =0 && hour <10){
        backgroundImg = "sunset12.png";
    }
    console.log("background:" + backgroundImg);


    //load the image in backgroundImg variable here
    
    
}
