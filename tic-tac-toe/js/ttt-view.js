class View {
  constructor(game, $container) {
    this.$container = $container;
  }

  bindEvents() {
    $ul = $('ul');
    $ul.on('click',"li",el => {
      target.css('background-color', 'red')
    });
  }

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul></ul>');
    const $li = $('<li></li>');
    // const $container = $('.ttt');
    for (let i = 0; i < 9; i++) {
      const $li = $('<li></li>');
      $ul.append($li);
    }
    this.$container.append($ul);
  }
}

module.exports = View;
