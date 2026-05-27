import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/messages"
          element={<Messages />}
        />
      </Routes>
    </BrowserRouter>
  );
}