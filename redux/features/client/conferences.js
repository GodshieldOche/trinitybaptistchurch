import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientConferences = createAsyncThunk(
    `conferences/getClientConferences`,
    async ({ req, topic, preacher, scripture, page = 1 }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)

        let link = `${origin}/api/client/conference?page=${page}`

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



export const getConferenceFilters = createAsyncThunk(
    `sermons/getConferenceFilters`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/conference/filters`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const conferencesSlice = createSlice({
    name: 'conferences',
    initialState: {
        loading: true,
        conferences: [],
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
        [getClientConferences.pending]: (state) => {
            state.loading = true
        },
        [getClientConferences.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.conferences = payload.conferences
            state.resPerPage = payload.resPerPage
            state.totalItems = payload.totalItems
        },
        [getClientConferences.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getConferenceFilters.pending]: (state) => {
            state.loading = true
        },
        [getConferenceFilters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.topics = payload.topics
            state.preachers = payload.preachers
            state.scriptures = payload.scriptures
        },
        [getConferenceFilters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default conferencesSlice.reducer