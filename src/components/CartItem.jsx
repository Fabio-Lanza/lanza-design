import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../Redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const {cartID, title, price, image, amount, company, productColor}=cartItem;
   const dispatch = useDispatch() 

   const removeItemFromCart = ()=> {
    dispatch(removeItem({cartID}))
   }

   const handleAmount = (e) => {
    dispatch(editItem({cartID, amount: parseInt(e.target.value) }))
   }

  return (
    <>
      <article
        key={cartID}
        className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6"
      >
        {/* Image */}
        <img
          src={image}
          alt=""
          className="w-32 h-24 rounded-lg sm:h-32 object-cover"
        />

        {/* Info */}
        <div className="sm:ml-16">
          {/* Title */}
          <h3 className="capitalize text-medium">{title}</h3>

          {/* company */}
          <h4 className="mt-2 capitalize text-sm text-neutral-content">
            {company}
          </h4>

          {/* Color */}
          <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
            color:{" "}
            <span
              className="badge badge-sm"
              style={{ backgroundColor: productColor }}
            ></span>
          </p>
        </div>

        <div className="sm:ml-12">
          {/* Amount */}
          <div className="form-control max-w-xs">
            <label htmlFor="amount" className="label p-0">
              <span className="label-text">Amount</span>
            </label>
            <select
              name="amount"
              id="amount"
              className="select select-base select-bordered select-xs"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </div>

          {/* Remove */}
          <button className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}>
            remove
          </button>
        </div>

        {/* Price */}
        <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
      </article>
    </>
  );
};

export default CartItem;
