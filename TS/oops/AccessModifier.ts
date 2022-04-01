class Brand {
   public Bname:string 
  protected  BModel:string 
   private price:number 

    constructor() {
        this.Bname = "Apple"
        this.BModel = "Iphone 12"
        this.price = 70000
    }
      private  printDetails() {
            console.log(this.Bname,this.BModel,this.price)
        }
    protected    changeModelName() {
            this.BModel = "Iphone 13"
        }
          public access() {
               this.printDetails()
               this.price = 90000
           }
}

  var b1 = new Brand()
  b1.access() 


class Apple extends Brand {
    productName:string
    productPrice:number 
    constructor() {
        super()
        this.productName = "Macbook"
        this.productPrice = 220000
    }
      printAppleDetails() {
          console.log(this.productName,this.productPrice,this.Bname,this.BModel)
          this.changeModelName() 
        // b1=    new Brand()
          
      }
        
    
}
  