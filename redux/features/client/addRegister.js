import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddRegister = createAsyncThunk(
    `user/postAddRegister`,
    async ({ conference, email, firstName, lastName, phone }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/client/register`, { conference, email, firstName, lastName, phone }, {
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


const addRegisterSlice = createSlice({
    name: 'addRegister',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddRegister.pending]: (state) => {
            state.loading = true
        },
        [postAddRegister.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addRegisterSlice.actions
export default addRegisterSlice.reducer