import {Container, Row, Col, Button} from "react-bootstrap";

export default function Profile() {
    const styles = {
        bgColor: {
            backgroundColor: "#F6E6DA",
        },
    };
    return (
        <>
            <Container className="my-5">
                <Row xs={1} md={2} className="justify-content-md-between">
                    <Col md="auto">
                        <h5 className="text-primary fw-bold mb-3">My Profile</h5>
                        <div className="d-flex gap-4 mb-3">
                            <img src="/waysbeans/profile.png" alt="" width="200px" className="rounded" />
                            <div>
                                <div className="mb-4">
                                    <h6 className="text-secondary fw-bold mb-2">Full Name</h6>
                                    <p>User</p>
                                </div>
                                <div>
                                    <h6 className="text-secondary fw-bold mb-2">Email</h6>
                                    <p>User@personal.com</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="auto">
                        <h5 className="text-primary fw-bold mb-3">My Transaction</h5>
                        <div className="p-3 w-100 mb-3 bg-accent">
                            <div className="d-flex align-items-center justify-content-between gap-5">
                                <div className="d-flex me-5">
                                    <img src="/waysbeans/guetemala.png" alt="" width="100px" />
                                    <div className="d-flex justify-content-between gap-5">
                                        <div className="ms-3">
                                            <div className="mb-3">
                                                <h5 className="text-primary fw-bold mb-1">RWANDA Beans</h5>
                                                <p className="m-0 text-secondary">
                                                    <span className="text-primary fw-bold">Saturday</span>, 23 January2023
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="m-0 text-secondary">Price: Rp 401.000</p>
                                                <p className="m-0 text-secondary">Qty: 2</p>
                                                <p className="text-secondary fw-bold m-0">Subtotal: 802.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-end gap-2">
                                    <img src="/waysbeans/Icon.png" className="mx-auto" alt="" width="90px" />
                                    <img src="/waysbeans/qrcode.png" className="mx-auto" alt="" width="60px" />
                                    <Button variant="success" className="mx-auto w-100" disabled>
                                        Success
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div style={styles.bgColor} className="p-3 w-100 mb-3">
                            <div className="d-flex align-items-center justify-content-between gap-5">
                                <div className="d-flex me-5">
                                    <img src="/waysbeans/ethiopia.png" alt="" width="100px" />
                                    <div className="d-flex justify-content-between gap-5">
                                        <div className="ms-3">
                                            <div className="mb-3">
                                                <h5 className="text-primary fw-bold mb-1">ETHIOPIA Beans</h5>
                                                <p className="m-0 text-secondary">
                                                    <span className="text-primary fw-bold">Saturday</span>, 8 February 2023
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="m-0 text-secondary">Price: Rp 550.000</p>
                                                <p className="m-0 text-secondary">Qty: 1</p>
                                                <p className="text-secondary fw-bold m-0">Subtotal: 550.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-end gap-2">
                                    <img src="/waysbeans/Icon.png" className="mx-auto" alt="" width="90px" />
                                    <img src="/waysbeans/qrcode.png" className="mx-auto" alt="" width="60px" />
                                    <Button variant="warning" className="mx-auto w-100" disabled>
                                        Waiting Aprrove
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div style={styles.bgColor} className="p-3 w-100 mb-3">
                            <div className="d-flex align-items-center justify-content-between gap-5">
                                <div className="d-flex me-5">
                                    <img src="/waysbeans/nicaragua.png" alt="" width="100px" />
                                    <div className="d-flex justify-content-between gap-5">
                                        <div className="ms-3">
                                            <div className="mb-3">
                                                <h5 className="text-primary fw-bold mb-1">NICARAGUA Beans</h5>
                                                <p className="m-0 text-secondary">
                                                    <span className="text-primary fw-bold">Saturday</span>, 3 November 2022
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className="m-0 text-secondary">Price: Rp 450.000</p>
                                                <p className="m-0 text-secondary">Qty: 2</p>
                                                <p className="text-secondary fw-bold m-0">Subtotal: 900.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column justify-content-end gap-2">
                                    <img src="/waysbeans/Icon.png" className="mx-auto" alt="" width="90px" />
                                    <img src="/waysbeans/qrcode.png" className="mx-auto" alt="" width="60px" />
                                    <Button variant="primary" className="mx-auto w-100" disabled>
                                        Completed
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
