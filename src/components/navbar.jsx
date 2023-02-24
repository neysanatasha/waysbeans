import {React, useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {Button, Navbar, Container, NavDropdown} from "react-bootstrap";
import Login from "./login";
import Register from "./register";

export default function NaviBar() {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const navigate = useNavigate();
    const handleCloseLogin = () => setLoginShow(false);
    const handleShowLogin = () => setLoginShow(true);
    const handleCloseRegister = () => setRegisterShow(false);
    const handleShowRegister = () => setRegisterShow(true);

    const handleLogout = () => {
        if (localStorage.getItem("userLogin")) {
            localStorage.removeItem("userLogin");
        } else if (localStorage.getItem("adminLogin")) {
            localStorage.removeItem("adminLogin");
        }
        navigate("/");
    };

    const user = JSON.parse(localStorage.getItem("userLogin"));
    const admin = JSON.parse(localStorage.getItem("adminLogin"));

    const login = () => {
        if (user) {
            return (
                <>
                    <div className="d-flex gap-4 align-items-center">
                        <Link to="/cart">
                            <img src="/waysbeans/cart.png" alt="" />
                        </Link>
                        <NavDropdown title={<img src="/waysbeans/profile.png" alt="" width="50px" height="50px" style={{objectFit: "cover"}} className="rounded-circle dropdown-center" />}>
                            <NavDropdown.Item className="fw-semibold">
                                <Link to="/profile" className="text-decoration-none">
                                    <img src="/waysbeans/beans.png" alt="" width="28" className="pe-2" />
                                    Profile
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout} className="fw-semibold d-flex align-items-center">
                                <span class="material-symbols-rounded pe-2 text-danger m-0">logout</span>Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </>
            );
        } else if (admin) {
            return (
                <>
                    <div className="d-flex gap-4 align-items-center">
                        <NavDropdown title={<img src="/waysbeans/profile.png" alt="" width="50px" height="50px" style={{objectFit: "cover"}} className="rounded-circle dropdown-center" />}>
                            <NavDropdown.Item className="fw-semibold">
                                <Link to="/income-transaction" className="text-decoration-none">
                                    <img src="/waysbeans/beans.png" alt="" width="28" className="pe-2" />
                                    Transaction
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="fw-semibold">
                                <Link to="/add-product" className="text-decoration-none">
                                    <img src="/waysbeans/beans.png" alt="" width="28" className="pe-2" />
                                    Add Product
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="fw-semibold">
                                <Link to="/list-product" className="text-decoration-none">
                                    <img src="/waysbeans/beans.png" alt="" width="28" className="pe-2" />
                                    List Product
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout} className="fw-semibold d-flex align-items-center">
                                <span class="material-symbols-rounded pe-2 text-danger m-0">logout</span>Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="d-flex gap-2 align-items-center">
                        <Button variant="outline-primary" className="py-1 px-4 fw-semibold" onClick={() => handleShowLogin()}>
                            Login
                        </Button>
                        <Button variant="primary" className="py-1 px-4 fw-semibold" onClick={() => handleShowRegister()}>
                            Register
                        </Button>
                    </div>
                </>
            );
        }
    };

    const popLogin = () => {
        setLoginShow(true);
        setRegisterShow(false);
    };

    const popRegister = () => {
        setLoginShow(false);
        setRegisterShow(true);
    };

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="/waysbeans/Icon.png" alt="" width="120px" />
                        </Link>
                    </Navbar.Brand>
                    {login()}
                </Container>
            </Navbar>

            <Login show={loginShow} onHide={() => handleCloseLogin()} handleRegister={() => popRegister()} />
            <Register show={registerShow} onHide={() => handleCloseRegister()} handleLogin={() => popLogin()} />
        </>
    );
}
