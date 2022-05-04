import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postCreateSermon = createAsyncThunk(
    `user/postCreateSermon`,
    async ({ title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink}, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/sermons`, {
                title, category, topic, preacher, book, chapter, verse, date,
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


const addSermonSlice = createSlice({
    name: 'addSermon',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postCreateSermon.pending]: (state) => {
            state.loading = true
        },
        [postCreateSermon.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postCreateSermon.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addSermonSlice.actions
export default addSermonSlice.reducer