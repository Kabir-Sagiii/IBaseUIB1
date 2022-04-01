var obj = {
  brand1: "LG",
  brand2: "Samsung",
  brand3: "Oneplus",
};

function printBrand(brandName) {
  if (obj.brand1 === brandName) {
    console.log("It is LG tv");
  }
  if (obj.brand2 === brandName) {
    console.log("It is Samsung Tv");
  }
  if (obj.brand3 === brandName) {
    console.log("It is oneplus Tv");
  }
}

printBrand("LG");
printBrand("Oneplus");
// printBrand("oneplus");
