import Link from "next/link";
import ProductCard from "../components/ProductCard";

interface Cheese {
  _id: string;
  name: string;
  countryOfOrigin: string;
  image: string;
}
async function Cheeses() {
  const response = await fetch("http://localhost:7357/cheeses", {cache: "no-store"});
  const cheeses = await response.json();
  console.log(cheeses)
  return (
    <div className="cheeses">
      <h1>Cheeses Page</h1>
      {cheeses.map((cheese: Cheese) => {
        return <ProductCard {...cheese}/>
      })}
    </div>
  );
}

export default Cheeses;
