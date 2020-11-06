class Sling    {
    constructor(bodyA,pointB)   {
        var options = {
            bodyA:bodyA ,
            pointB:pointB ,
            stiffness:1 ,
            angularStiffness:1 ,
            length:220 
        };
    this.pointB=pointB;
    this.pointX=bodyA.x;
    this.pointY=bodyA.y;
    World.add(world,this.sling);
    }

    display()   {
        if(this.sling.BodyA)  {
            var pointA=this.sling.bodyA.positon;
            var pointB=this.pointB;
            Push();
            strokeWeight(3.5);
            stroke("#fff")
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}