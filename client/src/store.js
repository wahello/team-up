import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import history from './history';
import reducers from './reducer';
import rootSaga from './sagas';

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const sagaMidlleware = createSagaMiddleware();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(sagaMidlleware, myRouterMiddleware);
  }

  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => !/^@@redux-form/.test(action.type)
  });

  return applyMiddleware(sagaMidlleware, myRouterMiddleware, logger);
};

const store = createStore(reducers, composeWithDevTools(getMiddleware()));
sagaMidlleware.run(rootSaga);

export default store;
