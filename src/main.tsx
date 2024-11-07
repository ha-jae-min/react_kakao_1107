import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import mainRouter from "./router/mainRouter.tsx";
import './index.css'
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(

    <>
        <App></App>
        <RouterProvider router={mainRouter}></RouterProvider>
    </>

)
