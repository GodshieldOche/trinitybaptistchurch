import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddMinister = createAsyncThunk(
    `user/postAddMinister`,
    async ({name, role, about, imageUrl}, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/ministers`, { name, role, about, imageUrl }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const addMinisterSlice = createSlice({
    name: 'addMinister',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddMinister.pending]: (state) => {
            state.loading = true
        },
        [postAddMinister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddMinister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addMinisterSlice.actions
export default addMinisterSlice.reducer