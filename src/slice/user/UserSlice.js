
import { createSlice } from "@reduxjs/toolkit";

const getUsers = ()=>{
    const user = localStorage.getItem('user');
    if(
        !user
    )
    {
        return null;
    }
    return JSON.parse(user);
}

const initialState = {
    user:getUsers()
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        saveUser : (state, action)=>{
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user=action.payload;
        },
        removeUser : (state, action)=>{
            localStorage.removeItem('user');
            state.user=null;
        }
    }
})

export const {saveUser, removeUser} = userSlice.actions;

export default userSlice.reducer;