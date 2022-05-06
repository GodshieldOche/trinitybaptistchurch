import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getBibleStudyDetails = createAsyncThunk(
    `bibleStudy/getBibleStudyDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/biblestudy/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateBibleStudy = createAsyncThunk(
    `bibleStudy/updateBibleStudy`,
    async ({ id, title, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/biblestudy/${id}`, {
                title, topic, preacher, book, chapter, verse, date,
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


const bibleStudySlice = createSlice({
    name: 'bibleStudy',
    initialState: {
        loading: false,
        bibleStudy: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getBibleStudyDetails.pending]: (state) => {
            state.loading = true
        },
        [getBibleStudyDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.bibleStudy = payload.bibleStudy
        },
        [getBibleStudyDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateBibleStudy.pending]: (state) => {
            state.loading = true
        },
        [updateBibleStudy.fulfilled]: (state) => {
            state.loading = false
        },
        [updateBibleStudy.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addbibleStudy } = bibleStudySlice.actions
export default bibleStudySlice.reducer