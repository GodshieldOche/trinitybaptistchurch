import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSeriesDetails = createAsyncThunk(
    `series/getClientSeriesDetails`,
    async ({ req, id }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/series/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        loading: true,
        series: {},
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientSeriesDetails.pending]: (state) => {
            state.loading = true
        },
        [getClientSeriesDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.series = payload.series
        },
        [getClientSeriesDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default seriesSlice.reducer