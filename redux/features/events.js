import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminEvents = createAsyncThunk(
    `events/getAdminEvents`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/event`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteEvent = createAsyncThunk(
    `events/postDeleteEvent`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/event/${id}`)
            dispatch(deleteOne(index))
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
        deleteOne: (state, { payload }) => {
            state.events.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminEvents.pending]: (state) => {
            state.loading = true
        },
        [getAdminEvents.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.events = payload.events
        },
        [getAdminEvents.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteEvent.pending]: (state) => {
            state.loading = true
        },
        [postDeleteEvent.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteEvent.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = eventsSlice.actions
export default eventsSlice.reducer