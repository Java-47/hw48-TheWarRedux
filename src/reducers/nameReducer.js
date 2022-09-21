import { createSlice } from "@reduxjs/toolkit";

const defaultName = {
    name: ''
}

const nameSlice = createSlice({
    name: 'name',
    initialState: defaultName,
    reducers: {
        changeName(name, action) {
            return action.payload;
        }
    }
})

export const {changeName} = nameSlice.actions;
export const nameReducer = nameSlice.reducer;