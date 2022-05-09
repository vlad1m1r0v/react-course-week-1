import Menu from "./components/Menu";
import { DISHES } from "./shared/dishes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
