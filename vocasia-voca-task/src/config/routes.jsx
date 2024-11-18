import { createBrowserRouter } from "react-router-dom"
import {Task, Login, UpdateProfile} from '../pages'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Login />
    },
    {
        path:'/task',
        element:<Task /> 
    },
    {
        path:'/profile',
        element:<UpdateProfile /> 
    }
])

