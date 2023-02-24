import {BrowserRouter, Route, Routes} from "react-router-dom";
import NaviBar from "./components/navbar";
import LandingPage from "./pages/landing-page";
import DetailProduct from "./pages/detail-product";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import IncomeTransaction from "./pages/income-transaction";
import AddProduct from "./pages/add-product";
import ListProduct from "./pages/list-product";
import UserRoutes from "./protected-route/user";
import AdminRoutes from "./protected-route/admin";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <NaviBar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/detail-product/:id" element={<DetailProduct />} />
                    <Route element={<UserRoutes />}>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route element={<AdminRoutes />}>
                        <Route path="/income-transaction" element={<IncomeTransaction />} />
                        <Route path="/add-product" element={<AddProduct />} />
                        <Route path="/list-product" element={<ListProduct />} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

            <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

            <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
        </>
    );
}
