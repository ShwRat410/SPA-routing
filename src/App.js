import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {path:'/',element:<HomePage></HomePage>},
      {path:'/products',element:<ProductsPage></ProductsPage>},
      {path:'/products/:productId',element:<ProductDetailsPage></ProductDetailsPage>}
    ]
  },

])

function App() {
  return <RouterProvider  router={router}></RouterProvider>;
}

export default App;
