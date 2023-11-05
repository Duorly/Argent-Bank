import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/utils/types/User';

const initialState: User = {
    token: "",
    email: "",
    remember: false,
    firstName: "",
    lastName: "",
};

export const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRemember: (state: User, action: PayloadAction<boolean>) => {
            state.remember = action.payload;
        },

        setToken: (state: User, action: PayloadAction<string>) => {
            state.token += action.payload;
        },

        logout: (state: User) => {
            state.token = "";
            state.firstName = "";
            state.lastName = "";
            state.email = "";
        },
    },
});

export const { setToken, setRemember, logout } = auth.actions;

export default auth.reducer;