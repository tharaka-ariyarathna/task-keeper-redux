import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import taskReducer from "../reducers/taskReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  taskReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
