import { createSlice } from "@reduxjs/toolkit";
import { useDispatch,useSelector } from 'react-redux'


const initialState = {
  value: []
};

const fightSlice = createSlice({
  name: 'fight',
  initialState,
  reducers: {
   add:(state,action)=>{
    state.value.push(action.payload)
   }
  }
});

export const AlladdSelector = (state) => state.fight.value;

export const { add } = fightSlice.actions;
export default fightSlice.reducer;
