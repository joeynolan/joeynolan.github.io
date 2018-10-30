
  var goodbye = ["see ya", "adios", "bye", "goodbye", "talk later", "au revior"]

  var el1 = document.getElementById("first")
  var el2 = document.getElementById("second")
  var el3 = document.getElementById("third")
  var el4 = document.getElementById("fourth")

  var randomNumber = Math.floor(Math.random() * 6)

  el1.textContent = goodbye[randomNumber]
  var randomNumber = Math.floor(Math.random() * 6)

  el2.textContent = goodbye[randomNumber]
  var randomNumber = Math.floor(Math.random() * 6)

  el3.textContent = goodbye[randomNumber]
  var randomNumber = Math.floor(Math.random() * 6)

  el4.textContent = goodbye[randomNumber]
  var randomNumber = Math.floor(Math.random() * 6)
