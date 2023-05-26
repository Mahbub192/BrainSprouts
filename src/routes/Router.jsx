import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ViewDetailToy from "../layout/ViewDetailToy";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import ViewToy from "../pages/Home/Home/ShopByCategory/ViewToy";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import Register from "../pages/Register/Register";
import PrivateRout from "./PrivateRout";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'allToys',
          element:<AllToys></AllToys>,
          loader:()=> fetch(`https://toy-server-phi.vercel.app/totalToy`)
        },
        {
          path:'myToys',
          element:<PrivateRout><MyToys></MyToys></PrivateRout>
        },
        {
          path:'addAToy',
          element:<AddAToy></AddAToy>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path:'/viewToy',
      element:<ViewDetailToy></ViewDetailToy>,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'toys/:id',
          element:<PrivateRout><ViewToy></ViewToy></PrivateRout>,
          loader: ({params})=> fetch(`https://toy-server-phi.vercel.app/findToyById/${params.id}`)
        }
      ]
    }
  ]);

export default router;