import {Container, Row, Col} from "react-bootstrap";
import {useParams, Link} from "react-router-dom";
import product from "../dummyData/products.json";

export default function DetailProduct() {
    const params = useParams();
    return (
        <>
            <Container className="my-5">
                <Row xs={1} lg={2} className="justify-content-center align-items-center g-4">
                    <Col xs="auto" className="d-flex justify-content-center">
                        <img fluid src={`/waysbeans/${product[params.id].photo}`} alt="" width="400px" />
                    </Col>
                    <Col class>
                        <div>
                            <h1 className="fw-bold fs-2 mb-1 text-primary">{product[params.id].name}</h1>
                            <p className="text-se">Stock: {product[params.id].stock}</p>
                        </div>
                        <p className="text-wrap" style={{textAlign: "justify"}}>
                            {product[params.id].description}
                        </p>
                        <div className="d-flex justify-content-end my-3">
                            <p className="fw-bold fs-4 text-secondary">Rp {product[params.id].price}</p>
                        </div>
                        <Link to="/cart" className="w-100 btn btn-primary fw-semibold">
                            Add Cart
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
