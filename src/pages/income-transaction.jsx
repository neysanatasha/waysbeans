import {Container, Table} from "react-bootstrap";

export default function IncomeTransaction() {
    return (
        <>
            <Container className="my-5">
                <h5 className="text-primary fw-bold mb-3">Income Transaction</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Post Code</th>
                            <th>Product Order</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Banana</td>
                            <td>Tanggerang</td>
                            <td>22011</td>
                            <td>ETHIOPIA Beans</td>
                            <td className="text-sucess">Success</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Watermelon</td>
                            <td>Depok</td>
                            <td>23444</td>
                            <td>RWANDA Beans</td>
                            <td className="text-danger">Cancel</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Apple</td>
                            <td>Sawangan</td>
                            <td>245678</td>
                            <td>RWANDA Beans</td>
                            <td className="text-warning">Waiting Approve</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Star Fruit</td>
                            <td>Bintaro</td>
                            <td>22134</td>
                            <td>GUETEMALA Beans</td>
                            <td className="text-info">On The Way</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Melon</td>
                            <td>Tanjung Priok</td>
                            <td>22322</td>
                            <td>NICARAGUA Beans</td>
                            <td className="text-sucess">Success</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}
