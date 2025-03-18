import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout></RootLayout>,
    children:[
      {path:'/',element:<HomePage></HomePage>},
      {path:'/products',element:<ProductsPage></ProductsPage>}
    ]
  },

])

function App() {
  return <RouterProvider  router={router}></RouterProvider>;
}

export default App;
