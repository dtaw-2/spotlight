import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Landing },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
