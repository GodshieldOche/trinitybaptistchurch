import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminMinisters = createAsyncThunk(
    `ministers/getAdminMinisters`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/ministers`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteMinister = createAsyncThunk(
    `ministers/postDeleteMinister`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/ministers/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)


const ministersSlice = createSlice({
    name: 'ministers',
    initialState: {
        loading: true,
        ministers: [],
        message: null,
    },
   reducers: {
        deleteOne: (state, { payload }) => {
            state.ministers.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminMinisters.pending]: (state) => {
            state.loading = true
        },
        [getAdminMinisters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.ministers = payload.ministers
        },
        [getAdminMinisters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteMinister.pending]: (state) => {
            state.loading = true
        },
        [postDeleteMinister.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [postDeleteMinister.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = ministersSlice.actions
export default ministersSlice.reducer