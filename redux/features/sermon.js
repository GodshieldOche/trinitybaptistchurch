import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getSermonDetails = createAsyncThunk(
    `sermon/getSermonDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/sermons/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateSermon = createAsyncThunk(
    `sermon/updateSermon`,
    async ({ id, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/sermons/${id}`, {
                title, category, topic, preacher, book, chapter, verse, date,
                description, imageUrl, audioUrl, youtubeLink
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)


const sermonSlice = createSlice({
    name: 'sermon',
    initialState: {
        loading: false,
        sermon: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getSermonDetails.pending]: (state) => {
            state.loading = true
        },
        [getSermonDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sermon = payload.sermon
        },
        [getSermonDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateSermon.pending]: (state) => {
            state.loading = true
        },
        [updateSermon.fulfilled]: (state) => {
            state.loading = false
        },
        [updateSermon.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addsermon } = sermonSlice.actions
export default sermonSlice.reducer