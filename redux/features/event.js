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
    async ({ id, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/event/${id}`, {
                title, category, topic, preacher, book, chapter, verse, date,
                description, imageUrl, audioUrl, youtubeLink
            }, {
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


const eventSlice = createSlice({
    name: 'event',
    initialState: {
        loading: false,
        event: null,
        message: null,
    },
    reducers: {

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
    }
})


// export const { deleteOne, addevent } = eventSlice.actions
export default eventSlice.reducer