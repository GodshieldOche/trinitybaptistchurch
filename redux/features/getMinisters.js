import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminMinisters = createAsyncThunk(
    `ministers/getAdminMinisters`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/ministers`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const ministersSlice = createSlice({
    name: 'ministers',
    initialState: {
        loading: true,
        ministers: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getAdminMinisters.pending]: (state) => {
            state.loading = true
        },
        [getAdminMinisters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ministers = payload.ministers
        },
        [getAdminMinisters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addProduct } = ministersSlice.actions
export default ministersSlice.reducer