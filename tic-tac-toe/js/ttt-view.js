class View {
  constructor($game, $container) {
    this.$container = $container;
    this.$game = $game;
    
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$container.on("click", "li", event => {
      const $square = $(event.currentTarget);
      $square.css('background-color', 'white');
      this.makeMove($square);
    });
  }
  
  makeMove($square) {
  
    const pos = $square.data("pos");
    const currentPlayer = this.$game.currentPlayer;
    
    
    try {
      this.$game.playMove(pos);
    } catch (e) {
      alert(e.msg);
      return;
    }
    $square.text(currentPlayer);
  }

  setupBoard() {
    const $ul = $("<ul>");

        for (let rowidx = 0; rowidx < 3; rowidx++) {
          for (let colidx = 0; colidx < 3; colidx++) {
            const $li = $("<li>");
            $li.data("pos", [rowidx, colidx]);
            $ul.append($li);
          }
        }
    this.$container.append($ul);
  }
}

module.exports = View;
