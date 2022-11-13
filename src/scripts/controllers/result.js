import result from '../../view/result.html';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = result;
  return divElement;
};