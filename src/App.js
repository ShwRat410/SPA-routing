import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  {path:'/',element:<HomePage></HomePage>},
  {path:'/products',element:<ProductsPage></ProductsPage>}
])

function App() {
  return <RouterProvider  router={router}></RouterProvider>;
}

export default App;
