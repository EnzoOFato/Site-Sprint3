import {createBrowserRouter} from 'react-router-dom'
import App from "../App"
import Login from '../pages/Login'
import Index from '../pages/Index'
import CriarConta from '../pages/CriarConta'
import Campeonatos from '../pages/Campeonatos'  

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "index",
                element: <Index />
            },
            {
                path: "campeonatos",
                element: <Campeonatos />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/criar",
        element: <CriarConta />
    }
])