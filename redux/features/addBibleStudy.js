import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddBibleStudy = createAsyncThunk(
    `addBibleStudy/postAddBibleStudy`,
    async ({ title, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/biblestudy`, {
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


const addBibleStudySlice = createSlice({
    name: 'addBibleStudy',
    initialState: {
        loading: false,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddBibleStudy.pending]: (state) => {
            state.loading = true
        },
        [postAddBibleStudy.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddBibleStudy.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addBibleStudySlice.actions
export default addBibleStudySlice.reducer