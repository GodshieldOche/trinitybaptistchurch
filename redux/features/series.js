import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminSeries = createAsyncThunk(
    `series/getAdminSeries`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/series`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteSeries = createAsyncThunk(
    `series/postDeleteSeries`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/series/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        loading: true,
        series: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.series.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminSeries.pending]: (state) => {
            state.loading = true
        },
        [getAdminSeries.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.series = payload.series
        },
        [getAdminSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteSeries.pending]: (state) => {
            state.loading = true
        },
        [postDeleteSeries.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = seriesSlice.actions
export default seriesSlice.reducer