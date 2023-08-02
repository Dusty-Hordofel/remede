import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
// import { RootState } from '../../app/store';

const url = "http://localhost:3001/api/v1/user"

// interface UserState { 
//     token?:string
//     email?: string,
//     password?: string,
//     loginError?:string|null
//   }

const initialState = {
    token:"",
    firstName: "",
    lastName: "",
    loginError:null
    
  };

  export const login = createAsyncThunk("auth/login",async(data, { rejectWithValue } ) => {
    const {email,password} = data

    try{
      const response = await axios.post(`${url}/login`, { email, password }, { withCredentials: true });
       const { token } = response.data
   
      if(token){
        const userData = await getUserData(token)
        const {lastName,firstName} = userData

         const userPayload = {
          token: token, 
          firstName: firstName, 
          lastName: lastName 
      }
        
      return userPayload

      }

    }catch(error){
      console.log("🚀 ~ file: authSlice.ts:22 ~ login ~ error:", error)
      return rejectWithValue({message:error});
      
    }


  })


  async function getUserData(token) {
    try {
        const response = await fetch(
            `${url}/profile`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
        const data = await response.json() 
        return data
        // return userInfo
    } catch ( error ) {
        console.log(error)
    }
}

  export const authSlice = createSlice({
  name: "auth",
  initialState,
   reducers: {
    // userInfos: (state, action) => {
    //     state.token = action.payload.token
    //     state.email = action.payload.email;
    //     state.password = action.payload.password;
    //   },   
   },
  extraReducers: (builder) => {
    builder.addCase(login.pending,(state,action) =>{
      state.loginError === null

    })
    
    builder.addCase(login.fulfilled,(state,action) => {
        console.log("🚀 ~ file: authSlice.js:59 ~ builder.addCase ~ action:", action.payload)
        state.token = action.payload.token
        state.lastName = action.payload.lastName;
        state.firstName = action.payload.firstName;
        
    } )

    builder.addCase( login.rejected, ( state, action ) =>
    {
        state.loginError = action.payload.message
    }
)

  }

})
  // export const authSlice = createSlice({
  // name: "auth",
  // initialState,
  // reducers: {
  //   userInfos: (state, action) => {
  //       state.token = action.payload.token
  //       state.email = action.payload.email;
  //       state.password = action.payload.password;
  //     },
  // }})


  export const {
    // userInfos
  } = authSlice.actions;
  // export const selectUser = (state: RootState) => state.auth.token; // Assurez-vous que vous utilisez RootState ici

  export default authSlice.reducer;

