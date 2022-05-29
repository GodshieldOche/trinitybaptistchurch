import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAdminRegisters = createAsyncThunk(
    `register/getAdminRegisters`,
    async (obj, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/admin/register`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


export const postDeleteRegister = createAsyncThunk(
    `register/postDeleteRegister`,
    async ({ id, index }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await axios.delete(`/api/admin/register/${id}`)
            dispatch(deleteOne(index))
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)


const registerSlice = createSlice({
    name: 'register',
    initialState: {
        loading: true,
        registers: [],
        message: null,
    },
    reducers: {
        deleteOne: (state, { payload }) => {
            state.register.splice(payload, 1)
        },
    },
    extraReducers: {
        [getAdminRegisters.pending]: (state) => {
            state.loading = true
        },
        [getAdminRegisters.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.registers = payload.registers
        },
        [getAdminRegisters.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [postDeleteRegister.pending]: (state) => {
            state.loading = true
        },
        [postDeleteRegister.fulfilled]: (state) => {
            state.loading = false
        },
        [postDeleteRegister.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


export const { deleteOne } = registerSlice.actions
export default registerSlice.reducer