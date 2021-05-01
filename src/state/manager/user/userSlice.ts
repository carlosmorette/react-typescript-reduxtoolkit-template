import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  name: string | null;
  email: string | null;
}

const initialState: InitialState = {
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { updateEmail, updateName } = userSlice.actions;

export default userSlice.reducer;
