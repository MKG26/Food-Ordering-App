import { useDispatch } from "react-redux";
import { MENU_ITEM_IMG } from "../utils/constants";
import { addItem } from "../utils/redux/cartSlice";
const ItemList = (data) => {
  const { list } = data;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="m-3">
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border-b-2 my-10"
        >
          <div className=" w-9/12">
            <div className=" text-left text-lg text-gray-700 font-medium">
              {item.card.info.name}
            </div>
            <div className="text-left font-medium text-gray-700 ">
              ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <div className="  text-left text-sm">
              {item.card.info.description}
            </div>
          </div>
          <div className=" ">
            <div className="absolute">
              <button
                className="mt-[130px] mx-[15px] bg-white px-10 py-1 rounded-lg shadow-lg text-green-600 font-bold text-lg border-2 border-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              className=" mb-10 h-[150px] w-[150px] object-cover  rounded-xl "
              src={MENU_ITEM_IMG + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
