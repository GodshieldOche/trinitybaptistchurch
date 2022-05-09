import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getConferenceDetails = createAsyncThunk(
    `conference/getConferenceDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/conference/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateConference = createAsyncThunk(
    `conference/updateConference`,
    async ({ id, title, description, imageUrl, startDate, endDate }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/conference/${id}`, { title, description, imageUrl, startDate, endDate }, {
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


export const postConferenceSermons = createAsyncThunk(
    `conference/postConferenceSermons`,
    async ({ id, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/conference?id=${id}`, {
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


export const postUpdateConferenceSermons = createAsyncThunk(
    `conference/postUpdateConferenceSermons`,
    async ({ id, sermonId, title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/conference/${id}?sermonId=${sermonId}`, {
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


export const postDeleteConferenceSermon = createAsyncThunk(
    `conference/postDeleteConferenceSermon`,
    async ({ id, sermonId, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/conference?id=${id}&sermonId=${sermonId}`)
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
        loading: false,
        conference: null,
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.conference.sermons?.splice(payload, 1)
        },
    },
    extraReducers: {
        [getConferenceDetails.pending]: (state) => {
            state.loading = true
        },
        [getConferenceDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.conference = payload.conference
        },
        [getConferenceDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateConference.pending]: (state) => {
            state.loading = true
        },
        [updateConference.fulfilled]: (state) => {
            state.loading = false
        },
        [updateConference.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postConferenceSermons.pending]: (state) => {
            state.loading = true
        },
        [postConferenceSermons.fulfilled]: (state) => {
            state.loading = false
        },
        [postConferenceSermons.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postUpdateConferenceSermons.pending]: (state) => {
            state.loading = true
        },
        [postUpdateConferenceSermons.fulfilled]: (state) => {
            state.loading = false
        },
        [postUpdateConferenceSermons.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteConferenceSermon.pending]: (state) => {
            state.loading = true
        },
        [postDeleteConferenceSermon.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteConferenceSermon.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = conferenceSlice.actions
export default conferenceSlice.reducer