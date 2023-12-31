import { getProducts, getProductSearch } from "@/app/library/data";
import Image from "next/image";
import { EditButton } from "@/app/ui_components/product/button";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Array<string>;
  thumbnail: string;
  brand: string;
  category: string;
  stock: number;
  rating: number;
}
export default async function Cards({ search }: { search: string }) {
  const products = await getProducts();
  const filteredProducts = await getProductSearch(search);
  return (
    <div className="flex flex-wrap">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white p-4 w-80 h-auto m-2 rounded-md text-sm flex flex-col justify-between"
        >
          <div>
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-md border border-gray-100 object-contain w-full h-40"
            />
            <div className="mt-2 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 gap-4 p-2">
                  <dt>Product</dt>
                  <dd className="col-span-2 truncate">{product.title}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2">
                  <dt>Category</dt>
                  <dd className="col-span-2 truncate">{product.category}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2">
                  <dt>Brand</dt>
                  <dd className="col-span-2 truncate">{product.brand}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2">
                  <dt>Price</dt>
                  <dd className="col-span-2 truncate">${product.price}</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 p-2">
                  <dt>Stock</dt>
                  <dd className="col-span-2 truncate">{product.stock} pcs</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-2">
            <EditButton />
          </div>
        </div>
      ))}
    </div>
  );
}
