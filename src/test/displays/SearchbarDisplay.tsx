import { Searchbar } from "../../components/Searchbar";

export function SearchbarDisplay() {
  const exampleData = [
    "T-shirt",
    "Jeans",
    "Hoodie",
    "Jacket",
    "Sneakers",
    "Boots",
    "Dress",
    "Hat",
    "Scarf",
    "Socks",
  ];
  return (
    <>
      <p className="text-3xl underline p-2">Searchbar</p>
      <Searchbar
        placeholder="Search for products..."
        data={exampleData}
        onSearch={(query) => alert(`Value: ${query}`)}
        size="xs"
      />
    </>
  );
}
