var obj1 = {
  a: 100,
}; //100
var obj2 = {
  a: 500,
};

function fn(x, y) {
  var b = x;
  var c = y;
  var results = this.a + b + c; //1000
  console.log(results);
}
fn.call(obj1, 10, 10);
fn.call(obj2, 50, 50);

// fn();
