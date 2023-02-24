
import {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import Register from "./register";

export default function Login(props) {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const [input, setInput] = useState({email: "", password: ""});
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setInput({...input, [name]: value});
    };
    let email = input.email;
    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem(email));
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            if (loggedUser.name === "Admin") {
                localStorage.setItem("adminLogin", true);
            } else {
                localStorage.setItem("userLogin", true);
            }
            props.onHide();
        } else {
            alert("Email atau Password anda salah bro!");
        }
    };

    return (
        <>
            <Modal {...props} centered>
                <Modal.Body>
                    <Modal.Title className="mb-3 text-primary">Login</Modal.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Control onChange={handleChange} name="email" value={input.email} className="mb-3 bg-accent" type="email" placeholder="Enter email" />
                        <Form.Control onChange={handleChange} name="password" value={input.password} type="password" placeholder="Password" className="mb-3 bg-accent" />
                        <Button variant="primary" type="submit" className="py-2 w-100 fw-semibold">
                            Login
                        </Button>
                    </Form>
                    <div className="d-flex justify-content-center align-items-center mt-3 gap-1">
                        <p className="m-0">Don't have an account? Click</p>
                        <Button variant="link" onClick={props.handleRegister} className="fw-bold p-0 text-decoration-none text-black">
                            Here
                        </Button>
                    </div>
                </Modal.Body>
                <Register show={registerShow} onHide={() => setRegisterShow(false)} />
                <Login show={loginShow} onHide={() => setLoginShow(false)} />
            </Modal>
        </>
    );
}
