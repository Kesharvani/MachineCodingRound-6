import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Home } from "./pages/home/Home";
import { RestaurantDetailPage } from "./pages/restaurantDetailPage/RestaurantDetailPage";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RestaurantDetailPage />} />
      </Routes>
    </div>
  );
}
