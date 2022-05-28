import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const postAddNews = createAsyncThunk(
    `user/postAddNews`,
    async ({ title, action, body, imageUrl }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/api/admin/news`, {  title, action, body, imageUrl  }, {
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


const addNewsSlice = createSlice({
    name: 'addNews',
    initialState: {
        loading: true,
        message: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [postAddNews.pending]: (state) => {
            state.loading = true
        },
        [postAddNews.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message = payload.message
        },
        [postAddNews.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    }
})


// export const { deleteOne, addProduct } = addNewsSlice.actions
export default addNewsSlice.reducer