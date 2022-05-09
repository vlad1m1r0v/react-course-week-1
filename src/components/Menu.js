import Dish from "./Dish";
import DishDetail from "./DishDetail";
import { useState } from "react";

export default function Menu({ dishes }) {
  const [selectedDish, setSelectedDish] = useState(null);

  const menu = dishes.map((dish) => (
    <Dish dish={dish} onSelect={setSelectedDish} />
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <DishDetail dish={selectedDish} />
      </div>
    </div>
  );
}
