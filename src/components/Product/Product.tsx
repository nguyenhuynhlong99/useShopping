import { Product as ProductModel } from '../../models/product.model';
import AddToCart from './AddToCart';
import styles from './Product.module.css';

type Props = {
  product: ProductModel;
};

export default function Product({ product }: Props) {
  const { title, price, image } = product;

  return (
    <li>
      <div className={styles.product}>
        <img className={styles.img} src={image} alt={title} />
        <div className={styles.productInfo}>
          <p className={styles.productTitle}>{title}</p>
          <p className={styles.productPrice}>${price}</p>
          <AddToCart product={product} />
        </div>
      </div>
    </li>
  );
}
