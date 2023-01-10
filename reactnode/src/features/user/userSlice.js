import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosLink } from "./userAPI";

const initialState = {
  arr: [],
}


export const userAxiosLink = createAsyncThunk(
  'user/fetchUser',
  async ({ link }) => {
    const response = await axiosLink({ link });
    // console.log('userSlice->', response);
    return response.data;
  }
);



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    allUser: (state, action) => {
      state.arr = [...action.payload]
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAxiosLink.pending, (state) => {
        console.log('loading');
      })
      .addCase(userAxiosLink.fulfilled, (state, action) => {
        //console.log(action);
        state.arr = action.payload;
      })
      .addCase(userAxiosLink.rejected, (state, action) => {
        // console.log("reject", action);
      })
  },
})

export const { allUser } = userSlice.actions

export const selectUser = (state) => state.user.arr

export default userSlice.reducer;