import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuState: false,
        modalState: false
    },
    reducers: {
        setMenuState: (state, { payload }) => {
            state.menuState = payload
        },
        setModalState: (state, { payload }) => {
            state.modalState = payload
        },
    },
})


export const { setMenuState, setModalState } = menuSlice.actions
export default menuSlice.reducer