class Box{
 constructor(){
     var balloptions ={
         restitution:1.0
     }
  this.body = Bodies.rectangle(random(0,400),0,20,random(10,40),balloptions);
  this.width = 20;
  this.height = random(10,40);
  this.yspeed = random(1,10);
  this.image = loadImage("sprites/kletter.png");

  World.add(world,this.body);
  
 }
display (){
    fill ("red");
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

}















}