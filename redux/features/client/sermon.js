import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSermonDetails = createAsyncThunk(
    `sermon/getClientSermonDetails`,
    async ({ req, id }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/sermon/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const sermonSlice = createSlice({
    name: 'sermon',
    initialState: {
        loading: true,
        sermon: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientSermonDetails.pending]: (state) => {
            state.loading = true
        },
        [getClientSermonDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sermon = payload.sermon
        },
        [getClientSermonDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default sermonSlice.reducer