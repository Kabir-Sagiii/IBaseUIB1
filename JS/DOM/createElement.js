function fnCreateElement() {
  // alert("working")

  var pRef = document.createElement("p");
  pRef.append("This is first dynamic paragraph element");
  pRef.style.fontSize = "20px";
  pRef.style.color = "green";
  document.querySelector("div").appendChild(pRef);
  //   document.querySelector("button").disabled = true;
}
