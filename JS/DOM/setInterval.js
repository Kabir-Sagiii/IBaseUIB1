var interval;
var interval2;
function callsetInterval() {
  interval = setInterval(function () {
    console.log("Function is called for every 3 seconds");
  }, 3000);

  interval2 = setInterval(function () {
    console.log("Function is called for every 5 seconds");
  }, 5000);
}

function fnclearInterval() {
  setTimeout(function () {
    clearInterval(interval);
  }, 10000);

  setTimeout(function () {
    clearInterval(interval2);
  }, 17000);
}
callsetInterval();
fnclearInterval();
