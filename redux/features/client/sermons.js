import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientSermons = createAsyncThunk(
    `sermons/getClientSermons`,
    async ({ req }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/sermon`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const sermonsSlice = createSlice({
    name: 'sermons',
    initialState: {
        loading: true,
        sermons: [],
        message: null,
    },
    reducers: {
        
    },
    extraReducers: {
        [getClientSermons.pending]: (state) => {
            state.loading = true
        },
        [getClientSermons.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sermons = payload.sermons
        },
        [getClientSermons.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default sermonsSlice.reducer