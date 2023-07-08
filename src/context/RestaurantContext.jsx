import { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, restaurantReducer } from "../reducer/restaurantReducer";
import { ACTION_TYPE } from "../utils/constant";
import { cuisineData, restaurantsData } from "../Database/restaurants";
export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialValue);
  const getData = () => {
    dispatch({
      type: ACTION_TYPE.SUCCESS,
      payload: { cuisineData, restaurantsData }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <RestaurantContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
