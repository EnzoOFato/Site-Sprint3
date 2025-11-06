import {createBrowserRouter} from 'react-router-dom'
import App from "../App"
import Login from '../pages/Login'
import CriarConta from '../pages/CriarConta'
import Campeonatos from '../pages/Campeonatos'  
import Jogadoras from '../pages/Jogadoras'
import Peneira from '../pages/Peneira'
import Index from '../pages/Index'
import Noticias from '../pages/Noticias'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "index",
                element: <Index />
            },
            {
                path: "campeonatos",
                element: <Campeonatos />
            },
            {
                path: "jogadoras",
                element: <Jogadoras />
            },
            {
                path: "peneiras",
                element: <Peneira />
            },
            {
                path: "noticias",
                element: <Noticias />
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