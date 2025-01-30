
import App from "../App";
import About from "../components/About/About";
import Home from "../components/Home";
import { createBrowserRouter } from 'react-router-dom';
import Services from "../components/Services/Services";
import Doctors from "../components/Doctors/Doctors";
import News from "../components/News/News";
import Contact from "../components/Contact/Contact";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AdminLogin from "../components/admin/AdminLogin";
import AdminProtect from "../components/admin/AdminProtect";
import Dashboard from "../components/admin/Dashboard";
import AdminServices from "../components/admin/Services";
import Users from "../components/admin/Users";
import AdminDoctors from "../components/admin/Doctors";
import CreateDoctor from "../components/admin/CreateDoctor";
import CreateService from "../components/admin/CreateService";
import CreateNews from "../components/admin/CreateNews";
import CreateBlog from "../components/admin/CreateBlog";
import AdminNews from "../components/admin/News";
import Blogs from "../components/admin/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path:'/about-us',
                element:<About />
            },
            {
                path:'/services',
                element:<Services />
            },

            {
                path:'/doctors',
                element:<Doctors  />
            },
            {
                path:'/news',
                element:<News />
            },
            {
                path:'/contact',
                element:<Contact />
            }
        ]
    },
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/register',
        element:<Register />
    },
    {
        path:'/admin',
        element:<AdminProtect><AdminLogin /></AdminProtect> 
    },
    {
        path:'/dashboard',
        element:<AdminProtect><Dashboard /></AdminProtect>,
        children:[
            {
                path:'users',
                element:<Users />
            },
            {
                path:'services',
                element:<AdminServices />
            },
            {
                path:'doctors',
                element:<AdminDoctors />
            },
            {
                path:'doctor/create',
                element:<CreateDoctor />
            },
            {
                path:'service/create',
                element:<CreateService />
            },
            {
                path:'news',
                element:<AdminNews />
            },
            {
                path:'blogs',
                element:<Blogs />
            },
            {
                path:'news/create',
                element:<CreateNews />
            },
            {
                path:'blog/create',
                element:<CreateBlog />
            }
        ]
    }
])


export default router;