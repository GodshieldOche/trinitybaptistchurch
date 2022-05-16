import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientBibleStudyDetails = createAsyncThunk(
    `bibleStudy/getClientBibleStudyDetails`,
    async ({ req, id }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)
        try {
            const { data } = await axios.get(`${origin}/api/client/biblestudy/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const bibleStudySlice = createSlice({
    name: 'bibleStudy',
    initialState: {
        loading: true,
        bibleStudy: {},
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientBibleStudyDetails.pending]: (state) => {
            state.loading = true
        },
        [getClientBibleStudyDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.bibleStudy = payload.bibleStudy
        },
        [getClientBibleStudyDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default bibleStudySlice.reducer