const View = require("./ttt-view.js");// require appropriate file
const Game = require("../solution/game.js");// require appropriate file



$( () => {
  let g = new Game();
  let v = new View(g, $(".ttt"));
});
