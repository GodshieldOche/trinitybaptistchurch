import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddSeries = createAsyncThunk(
    `addSeries/postAddSeries`,
    async ({ title, description, imageUrl }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/series`, { title, description, imageUrl }, {
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


const addSeriesSlice = createSlice({
    name: 'addSeries',
    initialState: {
        loading: false,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddSeries.pending]: (state) => {
            state.loading = true
        },
        [postAddSeries.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addSeriesSlice.actions
export default addSeriesSlice.reducer