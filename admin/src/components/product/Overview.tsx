import ProductList from "./ProductList";

const Overview = () => {
  return (
    <>
      <div className="  flex items-center justify-between">
        <div>
          <p className="text-white self-center text-xl font-semibold whitespace-nowrap pb-4">
            Product
          </p>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default Overview;
