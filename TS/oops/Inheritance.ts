class A {
    name:string 
    constructor() {
        this.name = "Raj"
    }
    printName() {
        console.log(this.name)
    }
}

class B extends A {
    city:string
    constructor() {
         super()
         this.city = "Delhi"

    }
    printDetails() {
        console.log(this.name,this.city)
    }
}

var b1 = new B()
b1.printDetails()