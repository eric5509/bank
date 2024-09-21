import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  value: number;
};

const initialState: TInitialState = {
  value: 10,
};

export const DropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    openDropdown: (state, action) => {
      state.value = action.payload;
      console.log(state.value)
      return state;
    },
    closeDropdown: (state) => {
      state.value = initialState.value;
      console.log(state.value)
      return state;
    },
  },
});

export const { openDropdown, closeDropdown } = DropdownSlice.actions;
