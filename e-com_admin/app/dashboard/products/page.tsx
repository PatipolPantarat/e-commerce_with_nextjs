import Cards from "@/app/ui_components/product/cards";
import { Suspense } from "react";
import { CreateButton } from "@/app/ui_components/product/button";
import Search from "@/app/ui_components/product/search";
export default function Page({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-2xl font-medium">Products</h1>
        <Search />
        <CreateButton />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cards search={searchParams?.search || ""} />
      </Suspense>
    </div>
  );
}
