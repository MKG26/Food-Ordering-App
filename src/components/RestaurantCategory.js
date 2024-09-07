import ItemList from "./ItemList";

import { IoIosArrowDown } from "react-icons/io";
const RestaurantCategory = ({ data, showList, setShowIndex }) => {
  return (
    <>
      <div className=" w-6/12 bg-gray-50 m-auto shadow-xl my-3  rounded-md">
        <div
          className="flex justify-between cursor-pointer p-4"
          onClick={() => setShowIndex()}
        >
          <span className="font-bold text-lg ">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>
            <IoIosArrowDown size={30} className="p-1" />
          </span>
        </div>
        <div className="">{showList && <ItemList list={data.itemCards} />}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;
