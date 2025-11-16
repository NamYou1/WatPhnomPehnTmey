import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Details from "./components/Pages/Details";
import RootLayout from "./Layout/RootLayout";
import CardInformation, {
  initialData,
} from "./components/Card/CardInformation";
import CardInformationDetail from "./components/Card/CardInformationDetail";
const routerdom = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ,
      {
        path: "about",
        element: <About />,
      },
      {
        path: "details/:id",
        element: <CardInformationDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "card",
        element: <Home />,
        children: [
          {
            // path : ":id",
            index: true,
            element: <CardInformation />,
            // loader: initialData,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={routerdom} />
    </LanguageProvider>
  );
};
export default App;
