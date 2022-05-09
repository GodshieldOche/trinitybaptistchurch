import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddConference = createAsyncThunk(
    `addConference/postAddConference`,
    async ({ title, description, imageUrl, startDate, endDate }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/conference`, { title, description, imageUrl, startDate, endDate }, {
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


const addConferenceSlice = createSlice({
    name: 'addConference',
    initialState: {
        loading: false,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddConference.pending]: (state) => {
            state.loading = true
        },
        [postAddConference.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddConference.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addConferenceSlice.actions
export default addConferenceSlice.reducer