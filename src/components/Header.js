import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => {
  return (
    <a href="/">
      <img className="ml-20 w-20" alt="logo" src={LOGO_URL} />
    </a>
  );
};

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-2 shadow-lg mb-2 ">
      <Title />

      <div className="flex items-center">
        <ul className="flex">
          <li className="font-medium px-4 py-3">
            Online Status: {onlineStatus ? "✅" : "❌"}{" "}
          </li>
          <Link to="/">
            <li className="font-medium px-4 py-3 hover:text-red-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="font-medium px-4 py-3 hover:text-red-500">About</li>
          </Link>
          <Link to="/contact">
            <li className="font-medium px-4 py-3 hover:text-red-500">
              Contact
            </li>
          </Link>
          <Link to="/grocery">
            <li className="font-medium px-4 py-3 hover:text-red-500">
              Grocery
            </li>
          </Link>
          <li className="font-medium px-4 py-3 hover:text-red-500">Cart</li>
          <button
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
            className="font-medium px-4 py-3 hover:text-red-500"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
