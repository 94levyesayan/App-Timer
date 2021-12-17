import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: MainSlice = {
  timers: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<Timer>) => {
      return {
        ...state,
        timers: [...state.timers, action.payload],
      };
    },
    setFilterTimer: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        timers: state.timers.filter((_:any, index: number) => {
          return index !== action.payload;
        }),
      };
    },
  },
});

export const { setTimer, setFilterTimer } = mainSlice.actions;

export default mainSlice.reducer;
