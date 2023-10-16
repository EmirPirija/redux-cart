import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Book: Adventure Awaits",
    description:
      "Embark on a thrilling journey with our captivating novel, 'Adventure Awaits.' Explore uncharted territories, encounter intriguing characters, and experience the thrill of a lifetime.",
  },
  {
    id: "p2",
    price: 4,
    title: "Book: Mystery Unveiled",
    description:
      "Uncover the secrets of a small town in 'Mystery Unveiled,' a riveting page-turner that will keep you on the edge of your seat. Dive into the unknown and solve the enigma that lies beneath the surface.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
