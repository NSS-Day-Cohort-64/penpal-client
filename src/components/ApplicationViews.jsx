import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./Login.jsx"
import { Authorized } from "./Authorized"
import Home from "../pages/Home"


export const ApplicationViews = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Authorized />}>
                <Route path="/" element={ <Home /> } />
            </Route>
        </Routes>
    </BrowserRouter>
}