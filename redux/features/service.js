import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getServiceDetails = createAsyncThunk(
    `service/getServiceDetails`,
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/service/${id}`)
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateService = createAsyncThunk(
    `service/updateService`,
    async ({ id, service, date, topic, imageUrl, bulletin }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/admin/service/${id}`, { service, date, topic, imageUrl, bulletin }, {
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


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        loading: false,
        service: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getServiceDetails.pending]: (state) => {
            state.loading = true
        },
        [getServiceDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.service = payload.service
        },
        [getServiceDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateService.pending]: (state) => {
            state.loading = true
        },
        [updateService.fulfilled]: (state) => {
            state.loading = false
        },
        [updateService.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addservice } = serviceSlice.actions
export default serviceSlice.reducer