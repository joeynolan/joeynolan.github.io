  var lItems = [];

  var first = document.querySelector("h1.first");
  first.innerHTML = "<i><b> This is the first line of the web page. </i></b>";

  lItems = document.getElementsByTagName("li");
  lItems[0].parentNode.setAttribute("class", "first");

  var listItem = document.createElement("li");
  var text = document.createTextNode("hello");
  listItem.appendChild(text);
  lItems[0].parentNode.appendChild(listItem);
