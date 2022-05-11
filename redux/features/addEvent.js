import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postCreateEvent = createAsyncThunk(
    `addEvent/postCreateEvent`,
    async ({ title, type, description, startDate, endDate, imageUrl, sessions }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/event`, {
                title, type, description, startDate, endDate, imageUrl, sessions
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


const addEventSlice = createSlice({
    name: 'addEvent',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postCreateEvent.pending]: (state) => {
            state.loading = true
        },
        [postCreateEvent.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postCreateEvent.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addEventSlice.actions
export default addEventSlice.reducer