import { useRef } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll";
import ItemsList from "./components/ItemsList";
import useFetch from "./hooks/useFetch";

function App() {
  const {
    query,
    setQuery,
    setPage,
    data,
    error,
    isLoading,
    fetchResults,
    setIsLoading
  } = useFetch();

  const ref = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type='text' value={query} onChange={handleInputChange} autoFocus />
      <div>
        <InfiniteScroll
          renderItems={(items) => <ItemsList items={items} />}
          data={data}
          isLoading={isLoading}
          setPage={setPage}
          fetchResults={fetchResults}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
}

export default App;
