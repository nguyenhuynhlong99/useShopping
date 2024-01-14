import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Product as ProductModel } from '../../models/product.model';
import styles from './ProductList.module.css';

export default function ProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=12');
        const data = await res.json();
        setProducts(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={styles.productList}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
