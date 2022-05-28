import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminNews = createAsyncThunk(
    `news/getAdminNews`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/news`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteNews = createAsyncThunk(
    `news/postDeleteNews`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/news/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const newsSlice = createSlice({
    name: 'news',
    initialState: {
        loading: true,
        news: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.news.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminNews.pending]: (state) => {
            state.loading = true
        },
        [getAdminNews.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.news = payload.news
        },
        [getAdminNews.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteNews.pending]: (state) => {
            state.loading = true
        },
        [postDeleteNews.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteNews.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = newsSlice.actions
export default newsSlice.reducer