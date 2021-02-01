class Slingshot{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:2
        }

        this.Slingshot=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.Slingshot)
    }
  fly()
  {
      this.Slingshot.bodyA=null;
  }
  attach(body){
    this.Slingshot.bodyA = body;
   }
    display()
    {
        if(this.Slingshot.bodyA)
        {
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        stroke("purple");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}