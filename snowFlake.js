function SnowFlake()
{
   this.x = 0;
   this.y = 0;
   this.z = 0;

   this.flakeOpacity = 0;

   this.flakeDiameter = 0;
   this.flakeBaseDiameter = 5;

   this.flakeSpeed = 0;
   this.flakeBaseSpeed = 1;

   this.spawnRandom = function()
   {
     this.x = floor(random(0, screenWidth));
     this.y = 0;
     //Assign a random value to give a sense of depth
     this.z = random(0, 1);

     this.flakeOpacity = random(0, 1);

     this.flakeDiameter = this.flakeBaseDiameter + 10 * this.z;
     this.flakeSpeed = this.flakeBaseSpeed + 3 * this.z;
   }

   this.show = function()
   {
      fill('rgba(255, 255, 255, '+ this.flakeOpacity.toString() +')');
      ellipse(this.x, this.y, this.flakeDiameter, this.flakeDiameter);
   }

   this.update = function()
   {
     if(this.y > screenHeight)
        this.spawnRandom();

    this.y += this.flakeSpeed;
   }
}
