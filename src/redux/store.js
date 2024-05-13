import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

import loggedReducer from "./isLogged"

const store = configureStore({
    reducer:{
        counter: counterReducer,
        logged: loggedReducer
    }
})

export default store