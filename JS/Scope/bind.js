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
// var fn = fn.bind(obj1);
// fn(10, 20);

fn.bind(obj2, 30, 30)();

// fn();
