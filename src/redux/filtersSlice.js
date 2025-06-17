import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",

  initialState: {
    status: "all",
  },

  reducers: {
    setStatusFilter: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;

//---------------------------------------------------------------

// import { createAction } from "@reduxjs/toolkit";
// export const setStatusFilter = createAction("filters/setStatusFilter");

// const initialState = {
//   status: "all",
// };

// export default function filterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//        c
//       };
//     default:
//       return state;
//   }
// }
