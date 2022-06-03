import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postCreateUser = createAsyncThunk(
    `user/postCreateUser`,
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/auth/register`, { name, email, password }, {
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


const addUserSlice = createSlice({
    name: 'addUser',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postCreateUser.pending]: (state) => {
            state.loading = true
        },
        [postCreateUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postCreateUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addUserSlice.actions
export default addUserSlice.reducer