import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminServices = createAsyncThunk(
    `services/getAdminServices`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/service`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteService = createAsyncThunk(
    `services/postDeleteService`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/service/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        loading: true,
        services: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.services.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminServices.pending]: (state) => {
            state.loading = true
        },
        [getAdminServices.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.services = payload.services
        },
        [getAdminServices.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteService.pending]: (state) => {
            state.loading = true
        },
        [postDeleteService.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteService.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = servicesSlice.actions
export default servicesSlice.reducer