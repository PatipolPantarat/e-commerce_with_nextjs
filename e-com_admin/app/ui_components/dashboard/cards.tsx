import { getProducts } from "@/app/library/data";
export default async function Cards() {
  const products = await getProducts();
  return (
    <div>
      <h1>Cards</h1>
      <p>Products Amount: {products.length}</p>
    </div>
  );
}
