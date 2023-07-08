import { ACTION_TYPE } from "../utils/constant";
export const initialValue = {
  cuisineData: [],
  restaurantsData: [],
  cuisine: {}
};
export const restaurantReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        cuisineData: action.payload.cuisineData,
        restaurantsData: action.payload.restaurantsData
      };
    case ACTION_TYPE.CUISINEBUTTON:
      return {
        ...state,
        cuisine: { ...action.payload }
      };
    default:
      console.log("error in reducer!!");
  }
};
