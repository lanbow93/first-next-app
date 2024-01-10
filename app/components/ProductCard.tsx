import Link from "next/link";
import styles from "./ProductCard.module.css"

interface Cheese {
    _id: string;
    name: string;
    countryOfOrigin: string;
    image: string;
  }


function ProductCard(cheese: Cheese) {
  return (
    <div className={styles.card}>
      <div className="cheese">
          <h1>{cheese.name}</h1>
          <p>{new Date().toLocaleString()}</p>
          <p>{cheese.countryOfOrigin}</p>
          <Link href={`/cheeses/${cheese._id}`}>Link To Cheese</Link>
        </div>
    </div>
  );
}

export default ProductCard;
