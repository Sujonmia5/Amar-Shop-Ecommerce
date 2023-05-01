import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: '/shop', element: <Shop />
            },
            {
                path: '/cart', element: <Cart />
            },
            {
                path: '/product/:id', element: < SingleProduct />,
                loader: ({ params }) => fetch(`http://localhost:5500/single-product/?id=${params.id}`)
            },
            {
                path: 'my-account', element: <MyAccount />
            },
            {
                path: '/contact', element: <Contact />
            }
        ]
    },
])