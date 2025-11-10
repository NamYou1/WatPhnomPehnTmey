import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import RootLayout from "./Layout/RootLayout";
const routerdom = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ,{
        path : "about",
        element : <About/>
      },{
        path : "contact",
        element : <Contact/>
      },
      {

      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={routerdom}></RouterProvider>;
};
export default App;