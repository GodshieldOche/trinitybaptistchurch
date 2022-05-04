import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getMinisterDetails = createAsyncThunk(
    `minister/getMinisterDetails`,
    async ( id, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/ministers/${id}`)
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)

export const updateMinister = createAsyncThunk(
    `minister/updateMinister`,
    async ({ id, name, role, about, imageUrl }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`/api/ministers/${id}`, { name, role, about, imageUrl }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return data
        } catch (error) {
            console.log(rejectWithValue(error))
            return rejectWithValue(error.response.data.message)
        }

    }
)


const ministerSlice = createSlice({
    name: 'minister',
    initialState: {
        loading: false,
        minister: null,
        message: null,
    },
    reducers: {

    },
    extraReducers: {
        [getMinisterDetails.pending]: (state) => {
            state.loading = true
        },
        [getMinisterDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.minister = payload.minister
        },
        [getMinisterDetails.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
        [updateMinister.pending]: (state) => {
            state.loading = true
        },
        [updateMinister.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [updateMinister.rejected]: (state, { payload }) => {
            state.loading = false
            state.message = payload
        },
    }
})


// export const { deleteOne, addminister } = ministerSlice.actions
export default ministerSlice.reducer