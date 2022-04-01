function fnvarScope() {
  var a;
  a = 10;
  var c = "Delhi";
  if (a > 5) {
    console.log(a);
    var b;
    b = 50;
  }

  console.log(b);
}
console.log(a);

fnvarScope();
