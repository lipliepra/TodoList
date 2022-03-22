import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<boolean>) {
      const type = action.payload;
      state = type;
      return state;
    },
  },
});

export const { setSortType } = sortSlice.actions;

export default sortSlice.reducer;
