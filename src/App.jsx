
import HomePage from "./routes/homePages/homePage.jsx";
import ListPage from "./routes/listPage/listPage.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";


export default function App() {

    const router = createBrowserRouter([
                {
                    path:"/",
                    element:<Layout/>,
                    children:[
                        {
                            path:"/",
                            element:<HomePage/>
                        },
                        {
                            path:"/list",
                            element:<ListPage/>
                        },
                        {
                            path:"/:id",
                            element:<SinglePage/>
                        },
                        {
                            path:"/profile",
                            element:<ProfilePage/>
                        },
                    ]
                },
    ]);

  return (
      <RouterProvider router={router}/>
  )
}
