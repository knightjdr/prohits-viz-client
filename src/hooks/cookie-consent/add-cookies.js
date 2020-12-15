import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const addCookies = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(
      process.env.REACT_APP_GOOGLE_ANALYTICS,
      {
        gaOptions: {
          anonymizeIp: true,
        },
      },
    );
    ReactGA.pageview(window.location.pathname + window.location.search);

    const history = createBrowserHistory();
    history.listen((location) => {
      ReactGA.pageview(location.pathname + location.search);
    });
  }
};

export default addCookies;
