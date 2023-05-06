import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Cart from "../Pages/Cart/Cart";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";

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
            },
            {
                path: '/about', element: <About />
            },
            {
                path: '/blog', element: <Blog />
            },
            {
                path: '/checkout', element: <Checkout />
            }
        ]
    },
])