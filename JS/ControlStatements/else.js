var obj = {
  brand1: "LG",
  brand2: "Samsung",
  brand3: "Oneplus",
};

function printBrand(brandName) {
  if (obj.brand1 === brandName) {
    console.log("It is LG tv");
  } else {
    console.log("It is not LG tv");
  }

  if (obj.brand2 === brandName) {
    console.log("It is Samsung Tv");
  } else {
    console.log("It is not  Samsung tv");
  }
  if (obj.brand3 === brandName) {
    console.log("It is oneplus Tv");
  } else {
    console.log("It is not oneplus Tv");
  }
}

printBrand("LG");
