const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

$( () => {
  const $game = new Game();
  const $container = $('.ttt');
  const $view = new View($game, $container);
  const $board = $view.setupBoard();
  
});
