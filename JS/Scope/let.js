function fnLetScope() {
  let a = 100;
  let c;
  c = "Banglore";

  if (a > 50) {
    console.log(a);
    let b = 50;
  }
  console.log(b);
}
fnLetScope();
// console.log(a);
