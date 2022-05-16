import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientConferences = createAsyncThunk(
    `conferences/getClientConferences`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/conference`)
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
        },
        [getClientConferences.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default conferencesSlice.reducer