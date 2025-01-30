
import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from '../features/doctors/doctorsApi'
import newsReducer from '../features/news/newsApi'
import serviceReducer from "../features/services/ServiceApi";
import blogReducer from "../features/blogs/blogApi"
import userReducer from "../features/users/UserApi"
import uReducer from '../slice/user/UserSlice'

export const store = configureStore({
    reducer:{
        user:uReducer,
        [doctorReducer.reducerPath]:doctorReducer.reducer,
        [newsReducer.reducerPath]:newsReducer.reducer,
        [serviceReducer.reducerPath]:serviceReducer.reducer, 
        [blogReducer.reducerPath]:blogReducer.reducer,
        [userReducer.reducerPath]:userReducer.reducer 
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(doctorReducer.middleware, newsReducer.middleware, serviceReducer.middleware, blogReducer.middleware, userReducer.middleware)
})

