import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminConference = createAsyncThunk(
    `conference/getAdminConference`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/conference`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteConference = createAsyncThunk(
    `conference/postDeleteConference`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/conference/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const conferenceSlice = createSlice({
    name: 'conference',
    initialState: {
        loading: true,
        conferences: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.conferences.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminConference.pending]: (state) => {
            state.loading = true
        },
        [getAdminConference.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.conferences = payload.conferences
        },
        [getAdminConference.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteConference.pending]: (state) => {
            state.loading = true
        },
        [postDeleteConference.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteConference.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = conferenceSlice.actions
export default conferenceSlice.reducer