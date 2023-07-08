import "./Restaurant.css";
import { useNavigate } from "react-router-dom";
export const Restaurant = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Dishes By {restaurant?.name}</h3>
      <div className="menu">
        {restaurant?.menu?.map((singleMenu) => {
          return (
            <div className="menu_tile" key={singleMenu?.name + restaurant?.id}>
              <img
                src={singleMenu?.imgSrc}
                alt="menuImage"
                width="170px"
                height="140px"
                onClick={() => navigate(`/${restaurant.id}`)}
              />
              <h4>{singleMenu?.name}</h4>
              <span>
                Rs. {singleMenu?.price} for {singleMenu?.qty}
              </span>
              <span>{restaurant?.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
