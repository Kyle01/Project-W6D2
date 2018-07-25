const HanoiGame = require("./game.js");
const HanoiView = require("./hanoi_view.js");

$( () => {
  const rootEl = $('.game');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
});