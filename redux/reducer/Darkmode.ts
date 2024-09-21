import { createSlice } from "@reduxjs/toolkit";


type TInitialState = {
    value: boolean
}

const initialState: TInitialState = {
    value: false
}

export const DarkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: ({
        toggleMode: (state) => {
            state.value = !state.value
        }
    })
})

export const {toggleMode} = DarkmodeSlice.actions