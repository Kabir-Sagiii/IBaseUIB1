var Students = /** @class */ (function () {
    function Students(n, c) {
        this.name1 = n;
        this.city1 = c;
    }
    //  constructor() {
    //      this.name1 = "Rahul"
    //      this.city1 = "Hyderabad"
    //  }
    Students.prototype.printDetails = function () {
        console.log(this.name1, this.city1);
    };
    return Students;
}());
var s1 = new Students("Raj", "Delhi");
// var s1 = new Students()
s1.printDetails();
var s2 = new Students("Sneha", "Nagpur");
// var s2 = new Students()
s2.printDetails();
