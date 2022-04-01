function fnCreateTableElement() {
  var tableRef = document.createElement("table"); // 100 rows

  var tr1 = document.createElement("tr");
  var tr2 = document.createElement("tr");
  var tr3 = document.createElement("tr");

  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");

  //Inserting the data into the element

  th1.append("NAME");
  th2.append("CITY");
  th3.append("EMAIL");

  td1.append("S1");
  td2.append("C1");
  td3.append("S1@gmail.com");

  td4.append("S2");
  td5.append("C2");
  td6.append("S2@gmail.com");
  //Appending columns to the rows

  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);

  tr2.appendChild(td1);
  tr2.appendChild(td2);
  tr2.appendChild(td3);

  tr3.appendChild(td4);
  tr3.appendChild(td5);
  tr3.appendChild(td6);

  tableRef.appendChild(tr1);
  tableRef.appendChild(tr2);
  tableRef.appendChild(tr3);

  td1.style.textAlign = "center";
  td2.style.textAlign = "center";
  td3.style.textAlign = "center";
  td4.style.textAlign = "center";
  td5.style.textAlign = "center";
  td6.style.textAlign = "center";

  tableRef.style.backgroundColor = "red";
  tableRef.style.padding = "30px";
  tableRef.style.color = "white";
  tableRef.style.width = "100%";

  document.querySelector("div").appendChild(tableRef);
}
