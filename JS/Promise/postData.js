function fnPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
      return res.json();
    })
    .then(
      function (actualdata) {
        //write the logic if you get success response
        // console.log(actualdata);
        // document.getElementById("userid").innerText =
        //   "User Id :" + actualdata[0].id;
        // document.getElementById("title").innerText =
        //   "Title :" + actualdata[0].title;

        actualdata.map(function (ele, index) {
          //create All Elements
          var divCard = document.createElement("div");
          var divCardHeader = document.createElement("div");
          var divCardBody = document.createElement("div");
          var h2Ref = document.createElement("h2");
          var h4Ref1 = document.createElement("h4");
          var h4Ref2 = document.createElement("h4");

          //create id and assign the value to them to all divs
          divCard.id = "card";
          divCardHeader.id = "card-header";
          divCardBody.id = "card-body";

          //appending data in h2,h4 element
          h2Ref.append("Post Information");
          h4Ref1.append(ele.id);
          h4Ref2.append(ele.title);

          //appending elements as child of divs
          divCard.appendChild(divCardHeader);
          divCard.appendChild(divCardBody);
          divCardHeader.appendChild(h2Ref);
          divCardBody.appendChild(h4Ref1);
          divCardBody.appendChild(h4Ref2);

          document.querySelector("body").appendChild(divCard);
        });
      },
      function () {
        //write the logic to handle failure response
      }
    );
}
