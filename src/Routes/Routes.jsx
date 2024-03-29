import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Category from "../Page/Category/Category";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    }
])

export default router