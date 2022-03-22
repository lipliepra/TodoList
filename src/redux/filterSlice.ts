import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "all";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType(state, action: PayloadAction<string>) {
      const type = action.payload;
      state = type;
      return state;
    },
  },
});

export const { setFilterType } = filterSlice.actions;

export default filterSlice.reducer;
