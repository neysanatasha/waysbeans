import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import products from "../dummyData/products.json";

export default function ProductCard() {
    const styles = {
        card: {
            backgroundColor: "#F6E6DA",
            width: "250px",
        },
    };

    return (
        <>
            <Container className="mb-5">
                <Row xs={1} md={2} lg={4} className="g-4 justify-content-center">
                    {products &&
                        products.length > 0 &&
                        products.map((res, index) => {
                            return (
                                <Link key={index} to={`detail-product/${index}`} className="text-decoration-none">
                                    <Col key={index}>
                                        <div style={styles.card}>
                                            <img src={`/waysbeans/${res.photo}`} width="250px" height="auto" alt={`/waybeans/${res.name}`} />
                                            <div className="mt-2 px-3 py-2">
                                                <p className="mb-2 fw-bold fs-5 text-decoration-none text-primary">{res.name}</p>
                                                <div>
                                                    <p className="mb-1 mt-3 text-secondary">Rp {res.price}</p>
                                                    <p className="text-secondary">Stock: {res.stock}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Link>
                            );
                        })}
                </Row>
            </Container>
        </>
    );
}
