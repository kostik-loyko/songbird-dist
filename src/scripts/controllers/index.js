import home from './home';
import game from './game';
import result from './result';
import err from './err';


const pages = {
  home: home(),
  game: game(),
  result: result(),
  err: err(),
};

export default pages;