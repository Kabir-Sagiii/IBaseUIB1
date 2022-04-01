var BrandModel = /** @class */ (function () {
    function BrandModel(m1, m2, m3) {
        this.vivoBrand = m1;
        this.onplusBrand = m2;
        BrandModel.appleBrand = m3;
    }
    BrandModel.prototype.printDetails = function () {
        console.log(this.vivoBrand, this.onplusBrand, BrandModel.appleBrand);
    };
    BrandModel.changeData = function () {
        BrandModel.appleBrand = "Iphone 13 Pro";
    };
    return BrandModel;
}());
//  var b1=  new BrandModel("Vivo A23","onplus 9","Iphone 13")
//  b1.onplusBrand = "oneplus 9 Pro"
//  b1.printDetails()
//  var b2 = new BrandModel("vivo A23 Pro","Oneplus9 Pro","Iphone 13 Pro") 
//  b2.onplusBrand = "oneplus 7 pro"
//  b2.printDetails()
//  BrandModel.appleBrand = "Iphone 11"
//  b1.printDetails() 
//  b2.printDetails()
var b1 = new BrandModel("Vivo A23", "onplus 9", "Iphone 13");
var b2 = new BrandModel("vivo A23 Pro", "Oneplus9 Pro", "Iphone 13 Pro");
b1.printDetails();
b2.printDetails();
