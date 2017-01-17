/*
  Snowing effect using the p5.js library
  Author: Alexandru Dudescu
  Website: https://alexdudescu.wordpress.com/
  Version: 0.1
*/

//Initialize screen size
var screenWidth = 800;
var screenHeight = 400;

//Inialize flake array
var flakeNumber = 100;
var flakes = [];

function setup()
{
    //Create the canvas
    createCanvas(screenWidth, screenHeight);

    //Disable all strokes
    noStroke();

    for( var i = 0; i < flakeNumber; i++)
    {
      //Create a new snow flake
      flakes[i] = new SnowFlake();

      //Spawn it randomply on the screen
      flakes[i].spawnRandom();
    }
}

function draw()
{
    //Draw a background of color 45
    background(45);

    //Update and display the position of each snow flake
    for( var i = 0; i < flakeNumber; i++)
    {
      flakes[i].update();
      flakes[i].show();
    }
}
