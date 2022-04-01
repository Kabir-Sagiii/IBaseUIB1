function fnCallback(f) {
  f(3, 4);
  var name;
  var city;
  name = "Kabir";
  city = "Delhi";
  f(100, 200);

  console.log(name, city);
  f(20, 30);
}

fnCallback(function (x, y) {
  var num1 = x;
  var num2 = y;
  console.log(num1 * num2);
});
