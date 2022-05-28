import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getNewsDetails = createAsyncThunk(
    `news/getNewsDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/news/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateNews = createAsyncThunk(
    `news/updateNews`,
    async ({id, title, action, body, imageUrl }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/news/${id}`, { id, title, action, body, imageUrl }, {
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


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        loading: false,
        news: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getNewsDetails.pending]: (state) => {
            state.loading = true
        },
        [getNewsDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.news = payload.news
        },
        [getNewsDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateNews.pending]: (state) => {
            state.loading = true
        },
        [updateNews.fulfilled]: (state) => {
            state.loading = false
        },
        [updateNews.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addnews } = newsSlice.actions
export default newsSlice.reducer