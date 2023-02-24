import {Container, Table, Button} from "react-bootstrap";

export default function ListProduct() {
    return (
        <>
            <Container className="my-5">
                <h5 className="text-primary fw-bold mb-3">List Product</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td>RWANDA Beans</td>
                            <td className="text-center">550</td>
                            <td className="text-center">650.000</td>
                            <td></td>
                            <td className="text-warning">
                                <div className="d-flex gap-2 justify-content-center">
                                    <Button variant="link" className="text-decoration-none badge w-100 bg-danger">
                                        Delete
                                    </Button>
                                    <Button variant="link" className="text-decoration-none badge w-100 bg-success">
                                        Update
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
