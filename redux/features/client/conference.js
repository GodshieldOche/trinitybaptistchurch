import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientConferenceDetails = createAsyncThunk(
    `conference/getClientConferenceDetails`,
    async ({ req, id }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/conference/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const conferenceSlice = createSlice({
    name: 'conference',
    initialState: {
        loading: true,
        conference: {},
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientConferenceDetails.pending]: (state) => {
            state.loading = true
        },
        [getClientConferenceDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.conference = payload.conference
        },
        [getClientConferenceDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default conferenceSlice.reducer