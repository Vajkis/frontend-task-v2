import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
    reducer: rootReducer,
    preloadedState: null
});

export default store;