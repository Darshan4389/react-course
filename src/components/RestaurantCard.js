import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.cloudinaryImageId}
        alt=""
      />
      <div className="res-card-data">
        <h3>Name : {resData.name}</h3>
        <h3>Cuisine: {resData.cuisines.join(", ")}</h3>
        <h3>Rating: {resData.avgRating}</h3>
        <h3>Time: {resData.deliveryTime} Mins</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
