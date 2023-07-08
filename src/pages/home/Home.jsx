import { useRestaurant } from "../../context/RestaurantContext";
import { Header } from "../../common/header/Header";
import { Restaurant } from "../../common/restaurant/Restaurant";
export const Home = () => {
  const { state } = useRestaurant();
  const filteredRestaurantsData =
    state?.cuisine?.id &&
    state?.restaurantsData?.filter(
      (item) => item?.cuisine_id === state.cuisine?.id
    );
  return (
    <div>
      <Header />
      {state?.cuisine?.name &&
        filteredRestaurantsData?.map((restaurant) => {
          return <Restaurant restaurant={restaurant} key={restaurant?.id} />;
        })}
    </div>
  );
};
