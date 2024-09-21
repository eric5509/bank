import { createSlice } from "@reduxjs/toolkit"

type TInitialState= {
    value: boolean 
}

const initialState: TInitialState = {
    value: false
}

export const LoadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: ({
        startLoading: (state) => {
            state.value = true
            return state
        },
        stopLoading: (state) => {
            state.value = false
            return state
        }
    })
})

export const { startLoading, stopLoading} = LoadingSlice.actions