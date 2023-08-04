import { useState } from 'react';

const SearchBar: React.FC = ({ searchText, isFlag, onSetSearchText, onSetIsShowProducts }) => {
  return (
    <form>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          onSetSearchText(e.target.value);
        }}
        placeholder="Search..."
      />
      <br />
      <label>
        <input
          type="checkbox"
          checked={isFlag}
          onChange={(e) => {
            onSetIsShowProducts(e.target.checked);
          }}
        />{' '}
        Only show products in stock
      </label>
    </form>
  );
};

const ProductCategoryRow: React.FC = ({ category }) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

const ProductRow: React.FC = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable: React.FC = ({ products, searchText, isFlag }) => {
  const rows: ProductType[] = [];
  let lastCategory: string | null = null;

  let filterProducts = searchText
    ? products.filter(
        (item: ProductType) => item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
      )
    : products;

  filterProducts = isFlag
    ? filterProducts.filter((item: ProductType) => item.stocked)
    : filterProducts;

  filterProducts.forEach((product: ProductType) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

type ProductType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

const PRODUCTS: ProductType[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

const FilterableProductTable: React.FC = () => {
  const [searchText, setSearchText] = useState('p');
  const [isShowProducts, setIsShowProducts] = useState(true);
  return (
    <div>
      <SearchBar
        searchText={searchText}
        isFlag={isShowProducts}
        onSetSearchText={setSearchText}
        onSetIsShowProducts={setIsShowProducts}
      />
      <ProductTable products={PRODUCTS} searchText={searchText} isFlag={isShowProducts} />
    </div>
  );
};

export default FilterableProductTable;
