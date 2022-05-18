import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientEvents = createAsyncThunk(
    `events/getClientEvents`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/event`)
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
    }
})


export default eventsSlice.reducer