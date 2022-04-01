export class ProductBrand {
    productName:string 
    productCategory:string 
    price:number 
    constructor() {
        this.productName = "Macbook"
        this.productCategory = "Electronic"
        this.price = 90000
    }
      printDetails() {
          console.log(this.productName,this.productCategory,this.price)
      }
}



export class Student  {
    name1:string
    phn:number 
    constructor() {
        this.name1 = "Ibase"
        this.phn = 999999999
    }

    printDetails() {
        console.log(this.name1,this.phn)
    }
}