import ProductCard from "./ProductCard";
import "./Products.scss";

// Gelen parametre 1 elemanlı bir obje bkz. App.js file bunu {products} süslü içine aldık
// Eğer bunun süslü içine almasaydık (products)=> olsaydı 11. satırda diziye ulaşmamız için {products.products.map((product) => ( yapmamız gerekecekti
const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {/*//! destructuring yapmadan kullanma */}
      {/* {products.map((product) => (
        <div key={product.id}>
          <div>
            <h3>{product.price}</h3>
          </div>
          <img src={product.image} alt={product.title} width="100px" />
          <div>
            <h2>{product.title}</h2>
          </div>
        </div>
      ))} */}

      {/*//! map in içinde destructuring etme */}
      {/* {products.map((product) => {
        const { price, title, image, id } = product;
        console.log(price);
        return (
          <div key={id}>
            <div>
              <h3>{price}</h3>
            </div>
            <img src={image} alt={title} width="100px" />
            <div>
              <h2>{title}</h2>
            </div>
          </div>
        );
      })} */}
      {/*//! map e ait olan callback parametresinde destructuring */}
      {/* {products.map(({ price, title, image, id }) => (
        <div key={id}>
          <div>
            <h3>{price}</h3>
          </div>
          <img src={image} alt={title} width="100px" />
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      ))} */}

      {/*//! Best Practice Alt Componente Gönderme */}
      {/*//! Buradan açmadan gönderip alt componentte karşılayıp içini açma */}
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}

      {/*//! Buradan spreadle açarak gönderip objenin propertylerini props objesine yerleştirme */}
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
