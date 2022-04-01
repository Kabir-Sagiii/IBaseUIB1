var arr = [34, 45, 78, 98, 12, 989, 11, 31, 27];

var filteredData = arr.filter(function (element, index) {
  return element < 30;
});

// console.log(filteredData);

var brand = [
  {
    name: "Apple",
    model: "Iphone 13",
  },
  {
    name: "Apple",
    model: "Iphone 7+",
  },
  {
    name: "Oneplus",
    model: "Onplus 9 pro",
  },
  {
    name: "Samsung",
    model: "Galaxy Edge",
  },
];

var filteredData = brand.filter(function (element) {
  return element.name === "Oneplus";
});

console.log(filteredData);
