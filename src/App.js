import { useGetAllProductsQuery, useGetProductQuery } from "./api-slice";
import Counter from "./Counter";

function App() {
  const { data: products } = useGetAllProductsQuery();
  const { data: product } = useGetProductQuery("iphone");

  console.log({ product, products });

  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
