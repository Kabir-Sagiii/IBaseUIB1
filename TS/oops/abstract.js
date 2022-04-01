var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
        this.pname = "";
        this.quantity = 0;
        this.price = 0;
    }
    ProductTemplate.prototype.totalAmount = function () {
        return this.quantity * this.price;
    };
    return ProductTemplate;
}());
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pname = "Mobile";
        _this.quantity = 10;
        _this.price = 20000;
        return _this;
    }
    Mobile.prototype.printDetails = function () {
        console.log("Mobile TotalAmount is:" + this.totalAmount());
    };
    return Mobile;
}(ProductTemplate));
var m1 = new Mobile();
m1.printDetails();
var Laptop = /** @class */ (function (_super) {
    __extends(Laptop, _super);
    function Laptop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pname = "macbook pro";
        _this.quantity = 3;
        _this.price = 140000;
        return _this;
    }
    Laptop.prototype.printDetails = function () {
        console.log(this.pname, this.price);
        console.log("Laptop TotalAMount is:" + this.totalAmount());
    };
    return Laptop;
}(ProductTemplate));
var l1 = new Laptop();
l1.printDetails();
