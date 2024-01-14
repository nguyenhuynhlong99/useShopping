import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Checkout.module.css';
import { clearCart, getCart, getTotalCartPrice } from './cartSlice';

export default function Checkout() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(getCart);
  const numberOfCartItems = cart.length;
  const totalCartPrice = useAppSelector(getTotalCartPrice);

  function handleCheckout() {
    dispatch(clearCart());
    toast.success('Purchased successfully!\nThank you for shopping with us ❤️');
  }

  if (numberOfCartItems < 1) return null;

  return (
    <div className={styles.checkout}>
      <h4>Order Summary</h4>
      <span>Subtotal: {totalCartPrice}</span>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
