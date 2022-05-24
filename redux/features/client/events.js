import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientEvents = createAsyncThunk(
    `events/getClientEvents`,
    async ({ req, month, next }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        let link = `${origin}/api/client/event`

        if (month) {
            link = link.concat(`?month=${month}`)
        }
        if (next) {
            link = link.concat(`&next=${next}`)
        }
        
        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const getClientServices = createAsyncThunk(
    `events/getClientServices`,
    async ({req}, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)

        try {
            const { data } = await axios.get(`${origin}/api/client/service`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        loading: true,
        events: [],
        services: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientEvents.pending]: (state) => {
            state.loading = true
        },
        [getClientEvents.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.events = payload.events
        },
        [getClientEvents.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [getClientServices.pending]: (state) => {
            state.loading = true
        },
        [getClientServices.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.services = payload.services
        },
        [getClientServices.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default eventsSlice.reducer