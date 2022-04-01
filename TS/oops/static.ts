class BrandModel {
   static appleBrand
    vivoBrand
    onplusBrand

    constructor(m1,m2,m3) {
      this.vivoBrand = m1
      this.onplusBrand = m2
    BrandModel.appleBrand = m3
    }
       printDetails() {
          console.log(this.vivoBrand,this.onplusBrand,BrandModel.appleBrand)
       }
       static changeData() {
          BrandModel.appleBrand = "Iphone 13 Pro"
       }
}

    //  var b1=  new BrandModel("Vivo A23","onplus 9","Iphone 13")
    //  b1.onplusBrand = "oneplus 9 Pro"
    //  b1.printDetails()


    //  var b2 = new BrandModel("vivo A23 Pro","Oneplus9 Pro","Iphone 13 Pro") 
    //  b2.onplusBrand = "oneplus 7 pro"
    //  b2.printDetails()

    //  BrandModel.appleBrand = "Iphone 11"
    //  b1.printDetails() 
    //  b2.printDetails()

     var b1=  new BrandModel("Vivo A23","onplus 9","Iphone 13")
     var b2 = new BrandModel("vivo A23 Pro","Oneplus9 Pro","Iphone 13 Pro") 
     
     b1.printDetails() 
      b2.printDetails()
