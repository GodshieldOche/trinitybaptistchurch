import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getSeriesDetails = createAsyncThunk(
    `seriesDetails/getSeriesDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/series/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateSeries = createAsyncThunk(
    `seriesDetails/updateSeries`,
    async ({ id, title, description, imageUrl }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/series/${id}`, {title, description, imageUrl}, {
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


export const postSermonSeries = createAsyncThunk(
    `seriesDetails/postSermonSeries`,
    async ({ id, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/series?id=${id}`, {
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


export const postUpdateSeriesSermon = createAsyncThunk(
    `seriesDetails/postUpdateSeriesSermon`,
    async ({ id, sermonId, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/series/${id}?sermonId=${sermonId}`, {
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


const seriesDetailsSlice = createSlice({
    name: 'seriesDetails',
    initialState: {
        loading: false,
        seriesDetails: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getSeriesDetails.pending]: (state) => {
            state.loading = true
        },
        [getSeriesDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.seriesDetails = payload.series
        },
        [getSeriesDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateSeries.pending]: (state) => {
            state.loading = true
        },
        [updateSeries.fulfilled]: (state) => {
            state.loading = false
        },
        [updateSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postSermonSeries.pending]: (state) => {
            state.loading = true
        },
        [postSermonSeries.fulfilled]: (state) => {
            state.loading = false
        },
        [postSermonSeries.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postUpdateSeriesSermon.pending]: (state) => {
            state.loading = true
        },
        [postUpdateSeriesSermon.fulfilled]: (state) => {
            state.loading = false
        },
        [postUpdateSeriesSermon.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addseriesDetails } = seriesDetailsSlice.actions
export default seriesDetailsSlice.reducer