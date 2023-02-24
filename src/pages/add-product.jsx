import {Container, Form, Row, Col, Button} from "react-bootstrap";

export default function AddProduct() {
    return (
        <Container className="my-5">
            <Row xs={1} md={2} className="justify-content-center">
                <Col>
                    <h5 className="text-primary fw-bold mb-3">Add Product</h5>
                    <Form className="d-flex flex-column gap-3">
                        <Form.Control type="text" className="bg-accent" placeholder="Name" />
                        <Form.Control type="number" className="bg-accent" placeholder="Stock" />
                        <Form.Control type="number" className="bg-accent" placeholder="Price" />
                        <textarea className="form-control bg-accent" placeholder="Description" rows="4"></textarea>
                        <Form.Control type="file" className="bg-accent" placeholder="Price" />
                        <Button variant="primary" type="submit" className="w-50 mx-auto">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md="auto">
                    <img src="/waysbeans/guetemala.png" alt="" width="350px" />
                </Col>
            </Row>
        </Container>
    );
}
