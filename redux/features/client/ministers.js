import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientMinisters = createAsyncThunk(
    `ministers/getClientMinisters`,
    async (obj, { rejectWithValue }) => {
       
        try {
            const { data } = await axios.get(`/api/client/ministers`)
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
        [getClientMinisters.pending]: (state) => {
            state.loading = true
        },
        [getClientMinisters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ministers = payload.ministers
        },
        [getClientMinisters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default ministersSlice.reducer