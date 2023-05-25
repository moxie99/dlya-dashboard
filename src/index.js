import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "state"
import { Provider } from "react-redux"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { api } from "state/api"
import { Toaster } from "react-hot-toast";
import { loginSlice } from "state/loginapi";
import { poolApi } from "state/poolApi";
const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
    [loginSlice.reducerPath]: loginSlice.reducer,
    [poolApi.reducer]: poolApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(api.middleware, loginSlice.middleware),
});

setupListeners(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>
);
