
import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from '../features/doctors/doctorsApi'
import newsReducer from '../features/news/newsApi'
import serviceReducer from "../features/services/ServiceApi";
import blogReducer from "../features/blogs/blogApi"
import userReducer from "../features/users/UserApi"
import uReducer from '../slice/user/UserSlice'
import appointmentReducer from "../features/appointment/AppointmentApi"
import contactApiReducer from "../features/contact/ContactApi";

export const store = configureStore({
    reducer:{
        user:uReducer,
        [doctorReducer.reducerPath]:doctorReducer.reducer,
        [newsReducer.reducerPath]:newsReducer.reducer,
        [serviceReducer.reducerPath]:serviceReducer.reducer, 
        [blogReducer.reducerPath]:blogReducer.reducer,
        [userReducer.reducerPath]:userReducer.reducer,
        [appointmentReducer.reducerPath]:appointmentReducer.reducer,
        [contactApiReducer.reducerPath]:contactApiReducer.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(doctorReducer.middleware, newsReducer.middleware, serviceReducer.middleware, blogReducer.middleware, userReducer.middleware, appointmentReducer.middleware, contactApiReducer.middleware)
})

