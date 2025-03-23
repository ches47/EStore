import ProductList from '@/components/Shared/Product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

export const metadata = {
  title: 'Main Page',
};

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return <ProductList data={latestProducts} title="New products" limit={4} />;
};

export default HomePage;
