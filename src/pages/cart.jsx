import {Container, Row, Col, Button} from "react-bootstrap";

export default function Cart() {
    const styles = {
        card: {
            backgroundColor: "#F6E6DA",
            width: "250px",
        },
        imgSize: {
            width: "75px",
            height: "75px",
            objectFit: "cover",
        },
        bgColor: {
            backgroundColor: "#F6E6DA",
        },
    };

    return (
        <>
            <Container className="my-5">
                <h4 className="my-4 text-primary">My Cart</h4>
                <p className="fw-semibold text-secondary my-0">Review your order</p>
                <Row xs={1} md={2} className="align-items-center">
                    <Col className="my-3">
                        <div className="w-100 d-flex align-items-center py-3 border-bottom border-top border-2 border-dark">
                            <img src="/waysbeans/rwanda.png" style={styles.imgSize} alt="RWANDA Beans" />
                            <div className="w-100 d-flex justify-content-between">
                                <div className="mx-3">
                                    <p className="fw-bold mb-2 text-primary">RWANDA Beans</p>
                                    <div className="d-flex gap-2 align-items-center">
                                        <Button variant="link" className="text-primary text-decoration-none p-0 fs-2">
                                            -
                                        </Button>
                                        <p className="m-0 px-3 py-1 rounded" style={styles.bgColor}>
                                            1
                                        </p>
                                        <Button variant="link" className="text-primary text-decoration-none p-0 fs-2">
                                            +
                                        </Button>
                                    </div>
                                <div>
                                    <p className="mb-2 text-secondary fw-semibold">Rp299.900</p>
                                </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-light d-flex align-items-center p-0">
                                            <span className="material-symbols-rounded text-primary">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="my-3">
                        <div className="py-3 border-top border-bottom border-2 border-dark">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <p className="text-secondary m-0">Subtotal</p>
                                <p className="text-secondary m-0">Rp 299.900</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="text-secondary m-0">Qty</p>
                                <p className="text-secondary m-0">1</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <p className="fw-bold text-primary m-0">Total</p>
                            <p className="fw-bold text-primary m-0">Rp 299.900</p>
                        </div>
                   </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                    <Button className="w-25 fw-semibold">Pay</Button>
                </div>
            </Container>
        </>
    );
}
