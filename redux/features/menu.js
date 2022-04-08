import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuState: false,
        menuType: "dropIn"
    },
    reducers: {
        setMenuState: (state, { payload }) => {
            state.menuState = payload
        },
        setMenuType: (state, { payload }) => {
            state.menuType = payload
        },
    },
})


export const { setMenuState, setMenuType } = menuSlice.actions
export default menuSlice.reducer