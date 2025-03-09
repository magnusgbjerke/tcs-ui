import { useState } from "react";
import { Searchbar } from "../../components/Searchbar";

export function SearchbarDisplay() {
  const exampleData = [
    { name: "T-shirt" },
    { name: "Jeans" },
    { name: "Hoodie" },
    { name: "Jacket" },
    { name: "Sneakers" },
    { name: "Boots" },
    { name: "Dress" },
    { name: "Hat" },
    { name: "Socks" },
    { name: "Scarf" },
  ];
  const [results, setResults] = useState(exampleData);

  function onChangeHandler(query: string) {
    const filteredResults = exampleData.filter((item: any) =>
      item.name.toLowerCase().includes(query)
    );
    setResults(filteredResults);
  }

  return (
    <>
      <p className="text-3xl underline p-2">Searchbar</p>
      <Searchbar
        placeholder={"Search for products..."}
        data={results}
        onSearch={(query) => alert(`Searched for: ${query}`)}
        onChange={(query) => onChangeHandler(query)}
        onClick={(item) => alert(`Clicked on: ${item.name}`)}
        size="xs"
      />
    </>
  );
}
