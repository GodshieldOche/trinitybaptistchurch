import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminSermons = createAsyncThunk(
    `sermons/getAdminSermons`,
    async ({ page }, { rejectWithValue }) => {
        try { 
            const { data } = await axios.get(`/api/admin/sermons?page=${page}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteSermon = createAsyncThunk(
    `sermons/postDeleteSermon`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/sermons/${id}`)
            dispatch(deleteOne(index))
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
        resPerPage: 0,
        totalItems: 0,
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.sermons.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminSermons.pending]: (state) => {
            state.loading = true
        },
        [getAdminSermons.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.sermons = payload.sermons
            state.resPerPage = payload.resPerPage
            state.totalItems = payload.totalItems
        },
        [getAdminSermons.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteSermon.pending]: (state) => {
            state.loading = true
        },
        [postDeleteSermon.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteSermon.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = sermonsSlice.actions
export default sermonsSlice.reducer