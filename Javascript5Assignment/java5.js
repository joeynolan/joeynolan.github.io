
  document.getElementById("box").addEventListener("mousemove", function(event) {
    getCoordinates(event);
  });

  document.addEventListener("keydown", resetCoordinates);


  function getCoordinates(e) {
    var xCoor = e.clientX;
    var yCoor = e.clientY;
    var xCoordinate = xCoor;
    var yCoordinate = yCoor;
    document.getElementById("x").innerHTML = xCoordinate;
    document.getElementById("y").innerHTML = yCoordinate;
  }

  function resetCoordinates(e) {
  var reset = e.keyCode;
  var a = 1;
    if (reset == 67) {
      var xCoor = 0;
      var yCoor = 0;
      document.getElementById("x").innerHTML = xCoor;
      document.getElementById("y").innerHTML = yCoor;
    }
  }
