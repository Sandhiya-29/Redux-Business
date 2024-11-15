import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdetails:[],
    selectedForm: {},
    isLoading:false,
    error:''
    
}
const BaseURL = "http://localhost:5000/formData"

//Post
export const adduserDetailsToServer = createAsyncThunk(
    "formData/adduserDetailsToServer",
    async(form,{rejectWithValue}) => {
        const options = {
           method:"POST",
           body:JSON.stringify(form),
           headers : {
            "Content-Type":"application/json"
           }
        }
        const response = await fetch(BaseURL,options)
           if(response.ok){
              const jsonResponse = await response.json()
              return jsonResponse
           }else{
            return rejectWithValue({error: "form not submitted"})
           }
    }
)

//Get
export const getuserDetailsFromServer = createAsyncThunk(
    "formData/getuserDetailsFromServer",
   async(_,{rejectWithValue}) => {
       const response = await fetch(BaseURL) 
         if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
         }else{
            return rejectWithValue({error:'No user found'})
         }
    }
)
 //Update

 export const updateuserDetailsInServer = createAsyncThunk(
    "formData/updateuserDetailsInServer",
   async(form,{rejectWithValue}) => {
    const options = {
        method:'PATCH',
        body:JSON.stringify(form),
        headers: {
            "Content-type":"application/json"
        }
    }
       const response = await fetch(BaseURL + '/' + form.id,options) 
         if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
         }else{
            return rejectWithValue({error:'user not updated'})
         }
    }

)

const userSlice = createSlice({
     name: 'user',
     initialState,
     extraReducers:(builder) => {
        builder
        .addCase(adduserDetailsToServer.pending,(state) => {
            state.isLoading= true
        })
        .addCase(adduserDetailsToServer.fulfilled,(state,action) => {
            state.isLoading = false
            state.error=''
            state.userdetails.push(action.payload)
        })
        .addCase(adduserDetailsToServer.rejected,(state,action) => {
            state.error= action.payload.error
            state.isLoading = false
        })
        //Get
        .addCase(getuserDetailsFromServer.pending,(state) => {
            state.isLoading = true
        })
        .addCase(getuserDetailsFromServer.fulfilled,(state,action) => {
            state.isLoading = false
            state.error= ''
            state.userdetails = action.payload
        })
        .addCase(getuserDetailsFromServer.rejected,(state,action) => {
            state.error = action.payload.error
            state.isLoading = false
            state.userdetails= []
        })
        //Update
        .addCase(updateuserDetailsInServer.pending,(state) => {
            state.isLoading= true
           })
         .addCase(updateuserDetailsInServer.fulfilled,(state,action) => {
            state.isLoading= false
            state.error = ''
            state.userdetails = state.userdetails.map((form) => form.id === action.payload.id ? action.payload : form )
    })
         .addCase(updateuserDetailsInServer.rejected,(state,action) => {
            state.error = action.payload.error
            state.isLoading = false
           })
     }
})


export default userSlice.reducer