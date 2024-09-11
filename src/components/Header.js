import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  
  console.log("Header rendered");
  
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty => useEffect is called once.
  // if dependency array is  [btnName] => called every time when btnName changes

  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg shadow-slate-400 m-2 sm:bg-" >
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-6">
            Online Status : {onlineStatus===true ?  "✅" : "🔴"}
          </li>
          <li className="px-6 mx-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-6 mx-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-6 mx-2">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-6 mx-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-6 mx-2">Cart</li>
          <button
            className="px-6 mx-2"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
