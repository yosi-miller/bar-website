import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./router/Home";
import Root from "./router/Root";
import About from "./router/About";
import ContentArea from "./router/ContentArea";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme, cacheRtl } from "../tema";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/new-item/:category", element: <ContentArea /> },
      { path: "/about", element: <About />},
    ],
  },
]);
function App() {
  return (
    <div dir="rtl">
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
