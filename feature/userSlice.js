import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:"",
    age:0,
}

const userSlice =createSlice({
    name : 'user',
    initialState,
    reducers : {
        updateName : (state,action)=>{
            state.name = action.payload
        },
        updateAge : (state,action)=>{
            state.age = action.payload
        }
    }
})
export default userSlice.reducer
export const {updateAge,updateName} = userSlice.actions