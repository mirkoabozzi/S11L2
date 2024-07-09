import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouritesCompany = useSelector((state) => state.favourites.content);

  const dispatch = useDispatch();

  return (
    <Container className="mt-2">
      <h1>My ❤️ Company</h1>
      <ListGroup className="mt-3">
        {favouritesCompany.map((company) => {
          return (
            <Row className=" align-items-center" key={company._id}>
              <Col xs="3" className="">
                <Link to={`/${company.company_name}`}>{company.company_name}</Link>
              </Col>
              <Col>
                <Button
                  variant="white"
                  className="m-2"
                  onClick={() => {
                    dispatch({ type: "REMOVE_FAVOURITE", payload: company._id });
                  }}
                >
                  🗑️
                </Button>
              </Col>
            </Row>
          );
        })}
      </ListGroup>
    </Container>
  );
};
export default Favourites;
