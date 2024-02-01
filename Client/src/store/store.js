import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import linksSlice from "./linksSlice";
import errorSlice from "./errorSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        links: linksSlice,
        errors: errorSlice,
        themes: themeSlice
    }
})

export default store;