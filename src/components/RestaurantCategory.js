import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className=" w-6/12 bg-gray-50 m-auto shadow-xl my-3 p-4 rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowList(!showList)}
        >
          <span className="font-bold text-lg ">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="">
          {data.title === "Recommended"
            ? !showList && <ItemList list={data.itemCards} />
            : showList && <ItemList list={data.itemCards} />}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
