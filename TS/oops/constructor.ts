class Products {
  productName
  productPrice
  

     constructor() {
          this.productName = "Lenovo Laptop"
          this.productPrice = 50000
     }

  printDetails() {
      console.log(this.productName,this.productPrice)
  }

}
   var p1 = new Products()
    p1.printDetails()