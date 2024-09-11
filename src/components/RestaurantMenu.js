import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo.cards[2].card.card.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // Swiggy image base URL
  const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="menu-container bg-gray-100 p-6 rounded-lg">
      {/* Restaurant Info Section */}
      <div className="restaurant-info text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{name}</h1>
        <p className="text-lg text-gray-600 mb-4">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <div className="rating bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block">
          <h3 className="text-xl">Average Rating: {avgRating}</h3>
        </div>
      </div>

      {/* Menu Section */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">Menu</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition">
            {/* Image of the food item */}
            <img
              className="w-full h-40 object-cover rounded-md mb-4"
              src={IMG_CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.card.info.name}</h3>
            {item.card.info.description && (
              <p className="text-sm text-gray-500 mb-3">{item.card.info.description}</p>
            )}
            <div className="price text-lg font-medium text-gray-700">
              Rs. {item.card.info.price / 100}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
