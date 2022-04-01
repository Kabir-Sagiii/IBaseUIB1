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
var A = /** @class */ (function () {
    function A() {
        this.a1 = "First Para";
        this.b1 = 9000;
    }
    A.prototype.details = function () {
        console.log(this.a1, this.b1);
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        _this.a2 = "B Argumnet";
        return _this;
    }
    B.prototype.details = function () {
        console.log("Child Class", this.a2);
        console.log("PArent Class", this.a1, this.a2);
        _super.prototype.details.call(this);
    };
    B.prototype.access = function () {
        //    this.details()
        _super.prototype.details.call(this);
    };
    return B;
}(A));
var b1Ref = new B();
var A1Ref = new A();
//    b1Ref.details()
//    A1Ref.details()
b1Ref.access();
