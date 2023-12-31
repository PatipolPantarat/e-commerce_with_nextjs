import { getProducts } from "@/app/library/data";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
export default async function Table() {
  const products = await getProducts();
  return <div></div>;
}
