import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminBibleStudies = createAsyncThunk(
    `bibleStudies/getAdminBibleStudies`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/biblestudy`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteBibleStudy = createAsyncThunk(
    `bibleStudies/postDeleteBibleStudy`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/biblestudy/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const bibleStudiesSlice = createSlice({
    name: 'bibleStudies',
    initialState: {
        loading: false,
        bibleStudies: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.bibleStudies.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminBibleStudies.pending]: (state) => {
            state.loading = true
        },
        [getAdminBibleStudies.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.bibleStudies = payload.bibleStudies
        },
        [getAdminBibleStudies.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteBibleStudy.pending]: (state) => {
            state.loading = true
        },
        [postDeleteBibleStudy.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteBibleStudy.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = bibleStudiesSlice.actions
export default bibleStudiesSlice.reducer