import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSermons = createAsyncThunk(
    `sermons/getClientSermons`,
    async ({ req, topic, preacher, scripture, page=1, sort = 'newest'}, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        let link = `${origin}/api/client/sermon?page=${page}&sort=${sort}`

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


export const getSermonFilters = createAsyncThunk(
    `sermons/getSermonFilters`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/sermon/filters`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const sermonsSlice = createSlice({
    name: 'sermons',
    initialState: {
        loading: true,
        sermons: [],
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
        [getClientSermons.pending]: (state) => {
            state.loading = true
        },
        [getClientSermons.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sermons = payload.sermons
            state.resPerPage = payload.resPerPage
            state.totalItems = payload.totalItems
        },
        [getClientSermons.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getSermonFilters.pending]: (state) => {
            state.loading = true
        },
        [getSermonFilters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.topics = payload.topics
            state.preachers = payload.preachers
            state.scriptures = payload.scriptures
        },
        [getSermonFilters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default sermonsSlice.reducer