var obj1 = {
  a: 100,
};
var obj2 = {
  a: 500,
};

function fn(x, y) {
  var b = x;
  var c = y;
  var results = this.a + b + c; //1000
  console.log(results);
}

fn.apply(obj1, [10, 40]);
