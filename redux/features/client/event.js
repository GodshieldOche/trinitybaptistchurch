import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientEventDetails = createAsyncThunk(
    `event/getClientEventDetails`,
    async ({ req, id }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/event/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const eventSlice = createSlice({
    name: 'event',
    initialState: {
        loading: true,
        event: {},
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientEventDetails.pending]: (state) => {
            state.loading = true
        },
        [getClientEventDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.event = payload.event
        },
        [getClientEventDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default eventSlice.reducer