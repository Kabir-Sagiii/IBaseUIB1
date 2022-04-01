class A {
     a1:string
     b1:number
    constructor() {
        this.a1 = "First Para"
        this.b1= 9000
    }

    details() {
      console.log(this.a1,this.b1)
    }
}
   class B extends A {
       a2:string 
       constructor() {
           super()
           this.a2 = "B Argumnet"
       }
         details() {
              console.log("Child Class",this.a2)
              console.log("PArent Class",this.a1,this.a2) 
              super.details()
         }
           access() {
            //    this.details()
               super.details()
           }
   }

   var b1Ref = new B()
   var A1Ref = new A()

//    b1Ref.details()
//    A1Ref.details()
b1Ref.access()