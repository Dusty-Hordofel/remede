import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'


interface UserState { 
    token:string
    email: string,
    password: string,
  }

const initialState: UserState = {
    token:"",
    email: "",
    password: "",
    
  };

  export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userInfos: (state, action) => {
        state.token = action.payload.token
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
  }})


  export const {
    userInfos
  } = authSlice.actions;
  export default authSlice.reducer;
  