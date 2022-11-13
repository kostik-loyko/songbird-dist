import err from '../../view/err.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = err;
  return divElement;
};