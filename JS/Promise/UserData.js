function fnGetData() {
  // In this function we need to write logic to get the data from server

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(
      function (actualData) {
        console.log(actualData);

        actualData.map(function (element, index) {
          var h3Ref = document.createElement("h3");
          h3Ref.append(element.name);
          document.querySelector("div").appendChild(h3Ref);
          return;
        });
      },
      function () {
        alert("Error while getting the data");
        // here we write the code to handle error response
      }
    );
}
