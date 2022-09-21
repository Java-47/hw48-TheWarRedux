import { createSlice } from "@reduxjs/toolkit";

const defaultScore = {
    player: 0,
    comp: 0
}

const scoreSlice = createSlice({
    name: 'score',
    initialState: defaultScore,
    reducers: {
        changePlayerScore(score, action) {
            score.player += action.payload
        },
        changeCompScore(score, action) {
            score.comp += action.payload
        },
        resetScore(score){
            score.player = 0;
            score.comp = 0;

        }

    }
})

export const {changePlayerScore,changeCompScore, resetScore} = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;