import { createSlice } from "@reduxjs/toolkit";
// import { Filter } from "components/filter/Filter";

const filtersInitialState = {
  // status: statusFilter.all,
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
