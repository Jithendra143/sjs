import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Petrol from "./pages/Petrol";
import Disel from "./pages/Disel";
import UserSettings from "./pages/UserSettings";
import CollectCash from "./pages/CollectCash";
import Auth from "./pages/Auth";

import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  const loggedInRoutes = [
    {
      path: "/",
      element: <Layout />, // Layout page
      children: [
        { index: true, element: <Dashboard /> }, // Default route
        { path: "user-settings", element: <UserSettings /> },
        {
          path: "sales",
          children: [
            { path: "disel", element: <Disel /> }, // Diesel route
            { path: "petrol", element: <Petrol /> }, // Petrol route
          ],
        },
        { path: "collect-cash", element: <CollectCash /> },
        // You can add a catch-all route for non-existent routes
        { path: "*", element: <Dashboard /> }, // Optional: catch-all route
      ],
    },
  ];

  const nonLoggedInRoutes = [
    {
      path: "/auth",
      element: <Auth />,
    },
    // You can add a redirect if user isn't logged in
    { path: "*", element: <Auth /> }, // Optional: redirect to auth for unknown routes
  ];

  const routes = [...(isLoggedIn ? loggedInRoutes : nonLoggedInRoutes)];

  const router = createHashRouter(routes);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        userId: userId,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
