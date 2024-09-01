import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
}) => {
  return (
    <div className="m-8 w-60 transform transition duration-500 hover:scale-110">
      <img
        className="rounded-3xl h-40 w-60 object-cover shadow-md mb-5 "
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h2 className="font-bold">{name}</h2>
      <h3 className=" font-light text-gray-500 text-sm">
        {cuisines.join(", ")}
      </h3>
      <h4 className="flex items-center">
        <img
          className="w-5 h-5 mr-1"
          src="https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png"
        />
        {avgRating} stars
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
