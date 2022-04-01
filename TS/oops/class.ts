class Brands {
   brandName:string = "Apple"
   brandModel:string = "Iphone 13"
   price:number = 110000

      printDetails() {
          console.log(this.brandName,this.brandModel,this.price)
      }
}

 var b1=   new Brands()
 b1.brandModel = "Iphone 12"
 b1.printDetails()

 var b2 = new Brands()
 b2.brandModel = "Iphone 7"
 b2.printDetails()