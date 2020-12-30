class chain{
    constructor(any1,any2){
        var options= {
            bodyA:any1,
            bodyB:any2,
            stiffness: 0.2,
            length : 30
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    
    }

   display(){
    var ab =this.chain.bodyA.position
    var bb =this.chain.bodyB.position
    line(ab.x,ab.y,bb.x,bb.y);

   } 
}