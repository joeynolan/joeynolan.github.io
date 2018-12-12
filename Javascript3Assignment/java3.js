
  function Game(h,v,hScore,vScore,summary){
    this.home = h;
    this.visitor = v;
    this.homeScore = hScore;
    this.visitorScore = vScore;
    this.getSummary = function(){
       return [h,v,hScore,vScore];
    }
  }

  function getScore(){
      return Math.floor((Math.random() * 20)+70);
  }

//------------------------------------------------------------------------

  var g1 = new Game("Germany", "Poland", getScore(), getScore());
  var g2 = new Game("Norway", "Sweden", getScore(), getScore());
  var g3 = new Game("Brazil", "Argentina", getScore(), getScore());
  var g4 = new Game("Greece", "Italy", getScore(), getScore());
  var g5 = new Game("China", "Japan", getScore(), getScore());
  var g6 = new Game("India", "Pakistan", getScore(), getScore());

  var element1 = document.getElementById('gameOne');
    element1.textContent = g1.getSummary();

  var element2 = document.getElementById('gameTwo');
    element2.textContent = g2.getSummary();

  var element3 = document.getElementById('gameThree');
    element3.textContent = g3.getSummary();

  var element4 = document.getElementById('gameFour');
    element4.textContent = g4.getSummary();

  var element5 = document.getElementById('gameFive');
    element5.textContent = g5.getSummary();

  var element6 = document.getElementById('gameSix');
    element6.textContent = g6.getSummary();
