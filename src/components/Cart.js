import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Cart</h1>

      {itemList.length > 0 ? (
        <div className="w-6/12 bg-gray-50 m-auto shadow-xl my-3 rounded-md p-3">
          <button
            className="flex ml-[700px] border-2 p-2 rounded-md font-medium"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList list={itemList} />
        </div>
      ) : (
        <h1 className="text-xl mt-10">Cart is Empty. Add items to cart</h1>
      )}
    </div>
  );
};

export default Cart;
