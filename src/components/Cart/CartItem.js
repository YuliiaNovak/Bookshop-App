import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
   const dispatch = useDispatch();

   const { title, amount, totalPrice, price, id } = props.item;

   const addToCartHandler = () => {
      dispatch(cartActions.addItem({ id, price, title }));
   };

   const removeFromCartHandler = () => {
      dispatch(cartActions.deleteItem(id));
   };

   return (
      <li className={classes.item}>
         <header>
            <h3>{title}</h3>
            <div className={classes.price}>
               ${totalPrice.toFixed(2)}{" "}
               <span className={classes.itemprice}>
                  (${price.toFixed(2)}/item)
               </span>
            </div>
         </header>
         <div className={classes.details}>
            <div className={classes.quantity}>
               x <span>{amount}</span>
            </div>
            <div className={classes.actions}>
               <button onClick={removeFromCartHandler}>-</button>
               <button onClick={addToCartHandler}>+</button>
            </div>
         </div>
      </li>
   );
};

export default CartItem;
