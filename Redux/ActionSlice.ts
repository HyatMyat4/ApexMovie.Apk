import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface initialState {
  counter: number;
}

const initialState: initialState = {
  counter: 0,
};

export const ActionSlice = createSlice({
  name: 'actionslice',
  initialState,
  reducers: {
    add_counter: (state: any, actions: PayloadAction<any>) => {
      state.counter = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {add_counter} = ActionSlice.actions;

export const counter_value = (state: initialState | any) =>
  state.actionslice.counter;

export default ActionSlice.reducer;
