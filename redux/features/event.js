import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getEvent = createAsyncThunk(
    `event/getEvent`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/event/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateEvent = createAsyncThunk(
    `event/updateEvent`,
    async ({ id, title, type, description, startDate, endDate, imageUrl, sessions }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/event/${id}`, { title, type, description, startDate, endDate, imageUrl, sessions }, {
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

export const postDeleteEventSession = createAsyncThunk(
    `series/postDeleteEventSession`,
    async ({ id, sessionId, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/event?id=${id}&sessionId=${sessionId}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const eventSlice = createSlice({
    name: 'event',
    initialState: {
        loading: false,
        event: null,
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.event.sessions?.splice(payload, 1)
        },
        setEventSessions: (state, { payload }) => {
            const inArray = state.event?.sessions?.find(session => session._id === payload._id)
            if (inArray) {
                state.event?.sessions?.map(session => {
                    if (session._id === payload._id) {
                        session.topic = payload.topic
                        session.preacher._id = payload.preacher
                        session.description = payload.description
                        session.startTime = payload.startTime
                        session.endTime = payload.endTime
                    }
                })
            } else {
                state.event?.sessions?.push(payload)
            }
        },
    },
    extraReducers: {
        [getEvent.pending]: (state) => {
            state.loading = true
        },
        [getEvent.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.event = payload.event
        },
        [getEvent.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateEvent.pending]: (state) => {
            state.loading = true
        },
        [updateEvent.fulfilled]: (state) => {
            state.loading = false
        },
        [updateEvent.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteEventSession.pending]: (state) => {
            state.loading = true
        },
        [postDeleteEventSession.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteEventSession.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { setEventSessions, deleteOne } = eventSlice.actions
export default eventSlice.reducer