import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import absoluteUrl from 'next-absolute-url'


export const getClientBibleStudies = createAsyncThunk(
    `bibleStudies/getClientBibleStudies`,
    async ({ req, topic, preacher, scripture }, { rejectWithValue }) => {
        const { origin } = absoluteUrl(req)

        let link = `${origin}/api/client/biblestudy?sort=-date`

        if (topic) {
            link = link.concat(`&topic=${topic}`)
        }
        if (preacher) {
            link = link.concat(`&preacher=${preacher}`)
        }
        if (scripture) {
            link = link.concat(`&scripture=${scripture}`)
        }

        try {
            const { data } = await axios.get(link)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)



const bibleStudiesSlice = createSlice({
    name: 'bibleStudies',
    initialState: {
        loading: true,
        bibleStudies: [],
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getClientBibleStudies.pending]: (state) => {
            state.loading = true
        },
        [getClientBibleStudies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.bibleStudies = payload.bibleStudies
        },
        [getClientBibleStudies.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export default bibleStudiesSlice.reducer