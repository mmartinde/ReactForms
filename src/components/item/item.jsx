import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function Item({ item }) {
  return (
    <Card className="mx-3 my-3 pt-1" style={{ width: "18rem" }}>
      <CardImg variant="top"  src={item.foto} />
      <CardBody>
        <CardTitle>{item.titulo}</CardTitle>
        <CardSubtitle>{item.year}</CardSubtitle>
        <CardText>{item.descripcion}</CardText>
        <ListGroup>
          <ListGroupItem>{item.categoria}</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
}

export default Item;
