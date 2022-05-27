import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSeries = createAsyncThunk(
    `series/getClientSeries`,
    async ({ req, topic, preacher, scripture, page = 1 }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)

        let link = `${origin}/api/client/series?page=${page}`

        if (topic) {
            link = link.concat(`&topic=${topic}`)
        }
        if (preacher) {
            link = link.concat(`&preacher=${preacher}`)
        }
        if (scripture) {
            link = link.concat(`&scripture=${scripture}`)
        }

        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const getSeriesFilters = createAsyncThunk(
    `sermons/getSeriesFilters`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/series/filters`)
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
        resPerPage: 0,
        totalItems: 0,
        preachers: [],
        scriptures: [],
        topics: [],
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
            state.resPerPage = payload.resPerPage
            state.totalItems = payload.totalItems
        },
        [getClientSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getSeriesFilters.pending]: (state) => {
            state.loading = true
        },
        [getSeriesFilters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.topics = payload.topics
            state.preachers = payload.preachers
            state.scriptures = payload.scriptures
        },
        [getSeriesFilters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default seriesSlice.reducer