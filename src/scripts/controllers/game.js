import game from '../../view/game.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = game;
  return divElement;
};