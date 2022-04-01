var Brands = /** @class */ (function () {
    function Brands() {
        this.brandName = "Apple";
        this.brandModel = "Iphone 13";
        this.price = 110000;
    }
    Brands.prototype.printDetails = function () {
        console.log(this.brandName, this.brandModel, this.price);
    };
    return Brands;
}());
var b1 = new Brands();
b1.brandModel = "Iphone 12";
b1.printDetails();
var b2 = new Brands();
b2.brandModel = "Iphone 7";
b2.printDetails();
