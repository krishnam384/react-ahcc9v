import { createStore, combineReducers } from "redux";
import { noteReducer } from "./reducer";

const rootReducer = combineReducers(noteReducer);

export const store = createStore(rootReducer);
