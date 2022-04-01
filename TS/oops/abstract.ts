abstract class ProductTemplate {
    pname:string = ""
    quantity:number = 0
    price:number = 0

    totalAmount():number {
      return this.quantity * this.price
    }

   abstract printDetails():void
}

class Mobile extends ProductTemplate {
       pname = "Mobile"
       quantity = 10 
       price = 20000 

       printDetails(): void {
         
           console.log(`Mobile TotalAmount is:${this.totalAmount()}`)

       }
        
         
}

 var m1=     new Mobile()
 m1.printDetails()

class Laptop extends ProductTemplate {
    pname = "macbook pro"
    quantity = 3 
    price = 140000 

     printDetails(): void {
         console.log(this.pname,this.price)
         console.log(`Laptop TotalAMount is:${this.totalAmount()}`)
       
     }
      
}
 var l1=  new Laptop()
 l1.printDetails()