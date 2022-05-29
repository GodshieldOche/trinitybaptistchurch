import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminEmails = createAsyncThunk(
    `email/getAdminEmails`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/email`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteEmail = createAsyncThunk(
    `email/postDeleteEmail`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/email/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const emailSlice = createSlice({
    name: 'email',
    initialState: {
        loading: true,
        emails: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.emails.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminEmails.pending]: (state) => {
            state.loading = true
        },
        [getAdminEmails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.emails = payload.emails
        },
        [getAdminEmails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteEmail.pending]: (state) => {
            state.loading = true
        },
        [postDeleteEmail.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteEmail.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = emailSlice.actions
export default emailSlice.reducer