import { createBrowserRouter,Navigate,RouterProvider } from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import  Techonologies from "./components/Techonologies"
import Java from "./components/Java"
import Reactjs from "./components/Reactjs"
import Vue from "./components/Vue"

function App() {
    //adding routing configuration
const routerObj=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"Register",
                element:<Register/>
            },
            {
                path:"Login",
                element:<Login/>
            },
            {
                path:"Technologies",
                element:<Techonologies/>,
                children:[
                    {
                        index:true,
                        element:<Navigate to="java" replace/>
                    },
                    {
                      path:"java",
                      element:<Java/>
                    },
                    {
                       path:"reactjs",
                       element:<Reactjs/>
                    },
                    {
                       path:"vue",
                       element:<Vue/>
                    },
                ]
            }
        ]
    }
])


  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App