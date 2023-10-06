import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home.jsx"
import Login from "./components/shared/Login"
import Register from "./components/shared/Register"
import Protected from "./components/shared/Protected"
import Dashboard from "./components/pages/Dashboard"
import CharacterForm from "./components/shared/CharacterForm"
import Characters from "./components/pages/Characters"
import Party from "./components/pages/Party"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route element={<Protected />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/dashboard/characters"
            element={<Characters />}
          />
          <Route
            path="/dashboard/party"
            element={<Party />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
