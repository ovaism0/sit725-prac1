// creating generic biosensor class

let getRandomArbitrary=function(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

class Biosensor {
    constructor(name){
        this.name=name; 
        this.live();
        this.currentHeartBeat=0;
        this.config={
            minHR:60,
            maxHR:68
        }

    }
    display(){
        console.log('Person:'+this.name+"  ||  HR:  "+this.currentHeartBeat);
    }        
    heartBeat(){
        this.currentHeartBeat=getRandomArbitrary(this.config.minHR,this.config.maxHR);
        this.display()
    }    

    //activate all the living biofunctions
    live(){
        console.log("IT'S ALIVE")
        setInterval(()=>{this.heartBeat()},1000)
    }
}

let andrea=new Biosensor('Andrea')
let james=new Biosensor('James')

