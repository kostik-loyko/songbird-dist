import pages from './controllers';

const router = (route) => {
  const container = document.getElementById('#root');
  container.innerHTML = '';

  switch (route) {
    case '#/': {
      return container.appendChild(pages.home);
    }
    case '#/game': {
      return container.appendChild(pages.game);
    }
    case '#/result': {
      return container.appendChild(pages.result);
    }
    default: {
      return container.appendChild(pages.home);
    }
  }
};

export default router;