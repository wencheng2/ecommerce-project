import "./CategoriesScreen.css";

// Components
import Product from '../components/Product';

const CategorieScreen = () => {
  return (
    <div className="categoriesscreen">
      <h2 className="categoriesscreen__title">Latest Products</h2>

      <div className="categoriesscreen__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
};

export default CategorieScreen