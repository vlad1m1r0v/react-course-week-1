import { Card } from "react-bootstrap";
export default function Dish({ dish, onSelect }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card key={dish.id} onClick={() => onSelect(dish)}>
        <Card.Img src={dish.image} alt={dish.name} />
        <Card.ImgOverlay>
          <Card.Title>{dish.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
