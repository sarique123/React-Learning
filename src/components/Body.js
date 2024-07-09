import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    // state variable
    let [listOfRestaurant,setListOfResataurant] = useState(resList);
    // normal JS variable
    // let  listOfRestaurantJS = [
        // {
        //     "info": {
        //         "id": "637321",
        //         "name": "Pizza Hut",
        //         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        //         "locality": "Hardoi Road",
        //         "areaName": "Daulatganj",
        //         "costForTwo": "₹350 for two",
        //         "cuisines": [
        //             "Pizzas"
        //         ],
        //         "avgRating": 4.2,
        //         "avgRatingString": "4.2",
        //         "sla": {
        //             "deliveryTime": 36,
        //             "lastMileTravel": 3.8,
        //             "serviceability": "SERVICEABLE",
        //             "slaString": "35-40 mins",
        //             "lastMileTravelString": "3.8 km",
        //             "iconType": "ICON_TYPE_EMPTY"
        //         }
        //     }
        // },
        // {
        //     "info": {
        //         "id": "636723",
        //         "name": "Chinese Wok",
        //         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        //         "locality": "Mahanagar",
        //         "areaName": "Mahanagar",
        //         "costForTwo": "₹250 for two",
        //         "cuisines": [
        //             "Chinese",
        //             "Asian",
        //             "Tibetan",
        //             "Desserts"
        //         ],
        //         "avgRating": 4.0,
        //         "parentId": "61955",
        //         "avgRatingString": "4.2",
        //         "totalRatingsString": "1K+",
        //         "sla": {
        //             "deliveryTime": 35,
        //             "lastMileTravel": 6.3,
        //             "serviceability": "SERVICEABLE",
        //             "slaString": "35-40 mins",
        //             "lastMileTravelString": "6.3 km",
        //             "iconType": "ICON_TYPE_EMPTY"
        //         }
        //     }    
        // }
    // ];
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.3
                );
                setListOfResataurant(filterList);
            }}>Top Rated Restaurant</button>
        </div>
        <div className="rest-container">
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} /> 
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} />
          <RestaurantCard resData={resList[13]} />
          <RestaurantCard resData={resList[14]} />
          <RestaurantCard resData={resList[15]} />
          <RestaurantCard resData={resList[16]} /> */}
          {
            listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))
          }
        </div>
      </div>
    );
  };

  export default Body;