import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => {
  return (
    <a href="/">
      <img className="w-24" alt="logo" src={LOGO_URL} />
    </a>
  );
};

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-2 bg-yellow-200 shadow-lg mb-2">
      <Title />

      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4 py-3">
            Online Status: {onlineStatus ? "✅" : "❌"}{" "}
          </li>
          <Link to="/">
            <li className="px-4 py-3 hover:bg-white rounded-lg">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 py-3 hover:bg-white rounded-lg">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 py-3 hover:bg-white rounded-lg">Contact</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4 py-3 hover:bg-white rounded-lg">Grocery</li>
          </Link>
          <li className="px-4 py-3 hover:bg-white rounded-lg">Cart</li>
          <button
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
            className="px-4 py-3 hover:bg-white rounded-lg"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
