import createSocketIoMiddleware from 'redux-socket.io';
import PropTypes from 'prop-types';
import SocketIo from 'socket.io-client';
import React from 'react';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import augmentMiddleware from './augment/augment-middleware';
import reducers from './reducers';
import reHydrate from './local-storage/rehydrate';
import subscribeMiddleware from './local-storage/subscribe-middleware';

const socket = SocketIo(process.env.REACT_APP_WS_HOST, { path: '/ws' });

export const addDevTools = () => (
  process.env.NODE_ENV === 'development'
  && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export const store = createStore(
  reducers,
  reHydrate(),
  compose(
    applyMiddleware(
      Thunk,
      subscribeMiddleware,
      augmentMiddleware,
      createSocketIoMiddleware(socket, ['post/']),
    ),
    addDevTools(),
  ),
);

const Store = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
