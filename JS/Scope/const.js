function fnconstScope() {
  //   const a = 100;
  const a = 900;
  // a = 900
  if (a > 10) {
    const b = 10;
    console.log(a);
    if (b > 5) {
      console.log(b);
    }
  }
  //   console.log(b);
}
fnconstScope();
