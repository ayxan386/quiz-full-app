import { createStore, applyMiddleware } from "redux";
import "../reducers/RootReducer";
import reducer from "../reducers/RootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(reducer, {}, applyMiddleware(thunk));

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
