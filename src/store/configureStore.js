import { configureStore } from "@reduxjs/toolkit";
import { nameReducer } from "../reducers/nameReducer";
import { scoreReducer } from "../reducers/scoreReducer";


// state = {
//     name: string
//     score: []
// }

export const store = configureStore({
    reducer: {
        name: nameReducer,
        score: scoreReducer
    },
})