import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientLatest = createAsyncThunk(
    `latest/getClientLatest`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const latestSlice = createSlice({
    name: 'latest',
    initialState: {
        loading: true,
        latest: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientLatest.pending]: (state) => {
            state.loading = true
        },
        [getClientLatest.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.latest = payload.latest
        },
        [getClientLatest.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default latestSlice.reducer