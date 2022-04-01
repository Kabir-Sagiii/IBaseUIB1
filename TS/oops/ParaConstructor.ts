class Students {
    name1
    city1

    constructor(n,c) {
         this.name1 = n 
         this.city1 = c
    }
    //  constructor() {
    //      this.name1 = "Rahul"
    //      this.city1 = "Hyderabad"
    //  }
    printDetails() {
        console.log(this.name1,this.city1)
    }
}
  var s1=  new Students("Raj","Delhi")
// var s1 = new Students()
  s1.printDetails() 

  var s2 = new Students("Sneha","Nagpur")
// var s2 = new Students()
  s2.printDetails()