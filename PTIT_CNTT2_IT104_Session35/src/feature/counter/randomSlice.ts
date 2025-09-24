import { createSlice } from "@reduxjs/toolkit"

interface RandomState{
    list: number[],
}
const initialState: RandomState = {
    list: []
}
const numberSlice = createSlice({
    name: "randomNumber",
    initialState,
    reducers:{
        random: (state)=>{state.list.push(Math.floor(Math.random() * 100))}
    }
})
export default numberSlice.reducer
export const {random} = numberSlice.actions