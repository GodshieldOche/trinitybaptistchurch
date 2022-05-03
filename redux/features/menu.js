import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuState: false,
        modalState: false,
        deletModalState: false,
        deleteModalData: {}
    },
    reducers: {
        setMenuState: (state, { payload }) => {
            state.menuState = payload
        },
        setModalState: (state, { payload }) => {
            state.modalState = payload
        },
        setDeletModalState: (state, { payload }) => {
            state.deletModalState = payload
        },
        setDeleteModalData: (state, { payload }) => {
            state.deleteModalData = payload
        },
    },
})


export const { setMenuState, setModalState, setDeleteModalData, setDeletModalState } = menuSlice.actions
export default menuSlice.reducer