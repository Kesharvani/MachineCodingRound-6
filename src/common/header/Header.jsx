import "./Header.css";
import { useRestaurant } from "../../context/RestaurantContext";
import { ACTION_TYPE } from "../../utils/constant";
export const Header = () => {
  const { state, dispatch } = useRestaurant();
  return (
    <div>
      <h2>Food Ordering App</h2>
      <h4>Select Your Cuisine</h4>

      <div className="category-button">
        {state?.cuisineData.map((cuisine) => {
          return (
            <button
              className="btn"
              key={cuisine.id}
              onClick={() =>
                dispatch({ type: ACTION_TYPE.CUISINEBUTTON, payload: cuisine })
              }
            >
              {cuisine?.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
