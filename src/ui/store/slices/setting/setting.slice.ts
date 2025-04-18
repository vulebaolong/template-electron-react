import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
   count: number;
};

const initialState: TInitialState = {
   count: 0,
};

const settingSlice = createSlice({
   name: "settingSlice",
   initialState,
   reducers: {
      SET_COUNT: (state, { payload }) => {
         state.count = payload;
      },
   },
});

export const { SET_COUNT } = settingSlice.actions;

export default settingSlice.reducer;
