import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLoading: false,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer