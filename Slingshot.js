class Slingshot {
    constructor(bodyA,pointB){
    var options = {bodyA:bodyA,pointB:pointB,length:10,stiffness:0.04}
    this.pointB = pointB
    this.slingshot = Constraint.create(options)
    World.add (world,this.slingshot)
    }
    display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        if(pointA.x<220){
            strokeWeight(7)
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
            rect(this.sling3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
            strokeWeight(4)
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x+20,pointA.y,pointB.x+30,pointB.y)
            rect(this.sling3,pointA.x+25,pointA.y-10,15,30)
        }
    
    }
    }
    fly(){
    this.slingshot.bodyA = null
    }
    attach(body)
{
this.slingshot.bodyA = body    
}
    }
    