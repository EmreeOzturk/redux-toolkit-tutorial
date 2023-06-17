import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "asdasd123123qweqwe",
          isModerator: false,
        } as AuthState,
      };
    },
    chaneStatus: (state) => {
      state.value.isModerator = !state.value.isModerator;
    },
  },
});

export const { logOut, logIn, chaneStatus } = authSlice.actions;
export default authSlice.reducer;
