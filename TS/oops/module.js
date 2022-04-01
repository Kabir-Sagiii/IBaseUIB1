"use strict";
exports.__esModule = true;
var ProductBrand = /** @class */ (function () {
    function ProductBrand() {
        this.productName = "Macbook";
        this.productCategory = "Electronic";
        this.price = 90000;
    }
    ProductBrand.prototype.printDetails = function () {
        console.log(this.productName, this.productCategory, this.price);
    };
    return ProductBrand;
}());
exports["default"] = ProductBrand;
