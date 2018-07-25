class View {
  constructor(game, $el) {
    this.game = game;
    this.view = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.cells').on("click", e => {
      const $cell = $(e.target);
      $cell.addClass("clicked");
      $cell.removeClass("cells");
      // alert($cell.data("pos"));
      this.makeMove($cell);
      if (this.game.isOver()){
        if (this.game.winner() === 'x'){
          $(".ttt").append('You win, O!');
        } else{
          $(".ttt").append("You win, X!");
        }
      }
    });
  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));
    $square.append(this.game.currentPlayer);
  }

  setupBoard() {
    $(this.view).append("<ul id='board'></ul>");
    for(let row = 0; row < 3; row++){
      for(let col = 0; col < 3; col++){
        let cell = $("<li>").addClass("cells").data("pos", [col,row]);
        $("#board").append(cell);
      }
    }
  }
}

module.exports = View;
