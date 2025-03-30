
// import {combineReducers ,configureStore} from "@reduxjs/toolkit"
// import SymbolReducer from "./slicer/SymbolSlicer"
// const rootReducer=combineReducers({
//     symbol:SymbolReducer
// })
 
// export const store=configureStore({
//     reducer:rootReducer
// })

// export type RootState= ReturnType<typeOf rootReducer>;
// export type AppStore=ReturnType<typeOf store>

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SymbolReducer from "./slicer/SymbolSlicer";

const rootReducer = combineReducers({
    Symbol: SymbolReducer
});

export const store = configureStore({
    reducer: rootReducer
});

// Corrected Type Definitions
