class HanoiView{
  constructor(game, $el) {
    this.game = game;
    this.view = $el;
    this.startTower = null;
    this.endTower = null;
    this.setupTowers();
    this.render();
    this.bindEvents();
    
  }
  
  bindEvents() {
    $(".tower").on("click", e =>{
      const $tower = $(e.target);
      $tower.attr("id", "clicked");
      if(!this.startTower){
        this.startTower = $tower.data("towerNum");
      } else {
        this.endTower = $tower.data("towerNum");
        this.makeMove();
      }
    });
  }
  
  makeMove() {
    console.log(this.startTower, this.endTower);
    this.game.move(this.startTower, this.endTower);
    this.startTower = null;
    this.endTower = null;
    this.render();
  }
  
  setupTowers() {
    // $(this.view).append("<ul class='universe'></ul>");
    for(let i = 0; i < 3; i++){
      let $tower = $("<ul class='tower'></ul>").data("towerNum", i);
      $(this.view).append($tower);
      for(let k = 0; k < 3; k++) {
        let spots = $("<li>").addClass("spot");
        $tower.append(spots);
      }
    }
  }
  
  generateBlock($spot, num){
    $spot.removeClass("disc-1");
    $spot.removeClass("disc-2");
    $spot.removeClass("disc-3");
    if(num === 3) { 
      $spot.addClass("disc-3");
    } else if (num === 2) {
      $spot.addClass("disc-2");
    } else if (num === 1) {
      $spot.addClass("disc-1");
    }
  }
  
  render() {
    const that = this;
    const towers = $('.tower');
    for(let k = 0; k < 3; k++){
      let visualTower = towers.eq(k);
      console.log($("visualTower>li"));
      let logicTower = that.game.towers[k];
      for(let i = 0; i < logicTower.length; i++){
        that.generateBlock(visualTower.eq(i), logicTower[i]);
      }
    }
  }
  
} // view end

module.exports = HanoiView;