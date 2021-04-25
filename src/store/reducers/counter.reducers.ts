import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value < 10 && state.value++;
    },
    decrement(state) {
      state.value > 0 && state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setValue,
} = counterSlice.actions;

export default counterSlice.reducer;
