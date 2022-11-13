import router from './router';


const app = () => {
  const init = () => {
    router(window.location.hash);

    window.addEventListener('hashchange', () => {
      router(window.location.hash);
    });
  };

  window.addEventListener('load', init);
};

export default app;