import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postCreateService = createAsyncThunk(
    `user/postCreateService`,
    async ({ service, date, topic, imageUrl, bulletin }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/service`, { service, date, topic, imageUrl, bulletin }, {
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


const addServiceSlice = createSlice({
    name: 'addService',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postCreateService.pending]: (state) => {
            state.loading = true
        },
        [postCreateService.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postCreateService.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addServiceSlice.actions
export default addServiceSlice.reducer