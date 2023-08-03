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
    } catch ( error ) {
        console.log(error)
    }
}


export const updateUserName = createAsyncThunk(
  "auth/updateUserName",
  async(data, { rejectWithValue } ) => {
    const {firstName,lastName,token} = data

    try {
      const response = await fetch(
          `${url}/profile`,
          {
              method: 'PUT',
              headers: {
                  'Content-type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
              body: JSON.stringify({firstName,lastName})
          }
      )
      const data = await response.json() 
      return data
  } catch (error) {
      console.log("🚀 ~ file: authSlice.js:93 ~ async ~ error:", error)
      return rejectWithValue({message:error});
  }
  }
)


  export const authSlice = createSlice({
  name: "auth",
  initialState,
   reducers: {
    signOut: (state) => {
        state.token = null
        state.firstName = null
        state.firstName = null
        state.loginError = null
       
      },   
   },
  extraReducers: (builder) => {
    builder.addCase(login.pending,(state,action) =>{
      state.loginError === null

    })
    
    builder.addCase(login.fulfilled,(state,action) => {
        state.token = action.payload.token
        state.lastName = action.payload.lastName;
        state.firstName = action.payload.firstName;
        
    } )

    builder.addCase( login.rejected, ( state, action ) =>
    {
        state.loginError = action.payload.message
    }
)

builder.addCase(updateUserName.pending,(state,action) =>{
  state.loginError === null

})

builder.addCase(updateUserName.fulfilled,(state,action) => {
  const {user} = action.payload
  state.lastName = user.lastName;
  state.firstName = user.firstName;
  
} )

builder.addCase( updateUserName.rejected, ( state, action ) =>
    {
        state.loginError = action.payload.message
    }
)

  }

})
  

  export const {
    signOut
  } = authSlice.actions;
  // export const selectUser = (state: RootState) => state.auth.token; // Assurez-vous que vous utilisez RootState ici

  export default authSlice.reducer;

