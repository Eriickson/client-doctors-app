import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter.reducers";
import doctor from "./doctor.reducers";

// Reducers
export const rootReducer = combineReducers({
  counter,
  doctor
});

export type RootStore = ReturnType<typeof rootReducer>;
