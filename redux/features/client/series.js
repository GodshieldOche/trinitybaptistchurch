import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSeries = createAsyncThunk(
    `series/getClientSeries`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/series`)
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
        series: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientSeries.pending]: (state) => {
            state.loading = true
        },
        [getClientSeries.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.series = payload.series
        },
        [getClientSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default seriesSlice.reducer