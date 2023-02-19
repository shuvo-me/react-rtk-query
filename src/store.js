import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api-slice";
import counterReducer from "./counter-slice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
