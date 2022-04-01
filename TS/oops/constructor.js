var Products = /** @class */ (function () {
    function Products() {
        this.productName = "Lenovo Laptop";
        this.productPrice = 50000;
    }
    Products.prototype.printDetails = function () {
        console.log(this.productName, this.productPrice);
    };
    return Products;
}());
var p1 = new Products();
p1.printDetails();
