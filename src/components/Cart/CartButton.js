import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
   const dispatch = useDispatch();
   const itemsAmount = useSelector((state) => state.cart.totalAmount);

   const toggleCartHandler = () => {
      dispatch(uiActions.toggleCart());
   };

   return (
      <button onClick={toggleCartHandler} className={classes.button}>
         <span>My Cart</span>
         <span className={classes.badge}>{itemsAmount}</span>
      </button>
   );
};

export default CartButton;
