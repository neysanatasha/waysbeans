import {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import Login from "./login";

export default function Register(props) {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const [input, setInput] = useState({email: "", password: "", name: ""});
    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setInput({...input, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem(input.email, JSON.stringify(input));
        localStorage.setItem("isLogin", true);
        props.onHide();
    };
    return (
        <>
            <Modal {...props} centered>
                <Modal.Body>
                    <Modal.Title className="mb-3 text-primary">Register</Modal.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control onChange={handleChange} name="email" value={input.email} className="mb-3 bg-accent" type="email" placeholder="Enter email" />
                        <Form.Control onChange={handleChange} name="password" value={input.password} className="mb-3 bg-accent" type="password" placeholder="Password" />
                        <Form.Control onChange={handleChange} name="name" value={input.name} type="text" placeholder="Full Name" className="mb-3 bg-accent" />
                        <Button variant="primary" type="submit" className="py-2 w-100 fw-semibold">
                            Register
                        </Button>
                    </Form>
                    <div className="d-flex justify-content-center align-items-center mt-3 gap-1">
                        <p className="m-0">Already have an account? Click</p>
                        <Button variant="link" onClick={props.handleLogin} className="fw-bold p-0 text-decoration-none text-black">
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
