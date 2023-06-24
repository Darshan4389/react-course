import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
    // console.log(resInfo.cards[0].card.card.info);
  };
  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <h1>{name}</h1>
      <h3>
        Ratings: {avgRatingString}, Cost for two: {costForTwoMessage}
      </h3>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                Rs.
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default RestaurantMenu;
