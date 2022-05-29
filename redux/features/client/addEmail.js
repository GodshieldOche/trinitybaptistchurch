import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddEmail = createAsyncThunk(
    `user/postAddEmail`,
    async ({ email }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/client/email`, { email }, {
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


const addEmailSlice = createSlice({
    name: 'addEmail',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddEmail.pending]: (state) => {
            state.loading = true
        },
        [postAddEmail.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddEmail.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addEmailSlice.actions
export default addEmailSlice.reducer