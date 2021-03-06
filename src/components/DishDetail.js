import { Card } from "react-bootstrap";
export default function DishDetail({ dish }) {
  const renderComments = (comments) =>
    comments.map((comment) => (
      <div key={comment.id}>
        <div>{comment.comment}</div>
        <div>
          --{comment.author}, {new Date(comment.date).toDateString()}
        </div>
      </div>
    ));

  if (!dish) return <></>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}>
            <Card.Img src={dish.image} alt={dish.name} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {renderComments(dish.comments)}
        </div>
      </div>
    </div>
  );
}
