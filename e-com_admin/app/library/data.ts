export async function getProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=15");
  const data = await response.json();
  // console.log(data.products);

  return data.products;
}

export async function getProductSearch(params: string) {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${params}`
  );
  const data = await response.json();
  return data.products;
}
