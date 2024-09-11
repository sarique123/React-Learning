import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  return (
    <div className="m-4 p-4 res-card w-[250px] rounded-2xl shadow-lg bg-white shadow-slate-400 hover:bg-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <img
        className="rounded-t-2xl w-full h-40 object-cover"
        alt={info.name}
        src={CDN_URL + info.cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{info.name}</h3>
        <p className="text-sm text-gray-500 mt-2">{info.locality}, {info.areaName}</p>
        <p className="text-sm text-gray-500 mt-1">{info.cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{info.avgRating} ★</span>
          <span className="text-sm text-gray-600">{info.sla.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

