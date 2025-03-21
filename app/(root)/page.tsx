import ProductList from '@/components/Shared/Product/product-list';
import sampleData from '@/db/sample-data';

export const metadata = {
  title: 'Main Page',
};

const HomePage = () => {
  return <ProductList data={sampleData.products} title="New products" limit={4} />;
};

export default HomePage;
