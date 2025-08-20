import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const API = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(API);
    return response.data;
})
export const addPost = createAsyncThunk("posts/addPost", async (newPost) => {
  const res = await axios.post(API, newPost);
  return res.data;
});

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.error.message;
        })
        .addCase(addPost.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });
    }
    });
  export default postSlice.reducer;  