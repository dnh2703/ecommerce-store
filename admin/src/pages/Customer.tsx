import Breadcrumb from "../components/common/Breadcrumb";
import {
  CustomerList,
  CustomerRating,
  NewCustomer,
} from "../components/customer";

const Customer = () => {
  return (
    <div className="md:p-4">
      <Breadcrumb />
      <div className="  flex items-center justify-between">
        <div>
          <p className="text-white self-center text-xl  pb-4 font-semibold whitespace-nowrap">
            Customer
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <NewCustomer />
        <CustomerRating />
      </div>

      <CustomerList />
    </div>
  );
};

export default Customer;
