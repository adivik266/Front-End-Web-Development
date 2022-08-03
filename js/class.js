class Animal{
    
    constructor(name,height,weight){
        console.log("Animal craeted")
        this.name=name;
        this.height=height;
        this.weight=weight;
        this.planet="Earth";
    }

    namelength(){
        return this.name.length;
    }
}

class Dog extends Animal{

    constructor(name,height,weight,barkvolm){
        super(name,height,weight);
        this.barkvolm=barkvolm;
        this.leashcolor;
    }

    bark(){
        if(this.barkvolm>50)
        console.log("Loud");
        else
        console.log("Slow");
    }

    getleash()
    {
        this.leashcolor = prompt("Enter leash color : ");
    }
}


var a1 = new Dog("Frodo",25,90,40);
var fish = new Animal("Gold", 2,5);