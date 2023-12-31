"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`searching for : ${term}`);
    const params = new URLSearchParams(searchParams);
    term ? params.set("search", term) : params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-md outline-none placeholder:text-gray-500 p-3"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
}
