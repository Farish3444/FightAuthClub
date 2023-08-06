import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "./fightSlice";
import { useMemo } from "react"; 

const store = configureStore({
  reducer: {
    fight: fightReducer
  }
});

export default store;