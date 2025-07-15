const OrderSummary = () => {
  return (
    <div className="flex flex-col items-center">
      <div className=" w-96 border dark:border-white dark:text-white">
        <h1 className="text-2xl font-semibold border-b uppercase p-3">
          Order Summary
        </h1>
        {/* SubTotal */}
        <div className="flex justify-between px-6 py-4">
          <h3 className="text-xl font-semibold uppercase">SubTotal</h3>
          <span className="text-xl">₹500</span>
        </div>

        {/* Taxes */}
        <div className="flex justify-between px-6 py-4">
          <h3 className="text-xl font-semibold uppercase">Taxes</h3>
          <span className="text-lg">₹190</span>
        </div>

        {/* Total */}
        <div className="flex justify-between px-6 py-3 border-t">
          <h3 className="text-xl font-semibold uppercase">Total</h3>
          <span className="text-lg">₹590</span>
        </div>
      </div>
      {/* Checkout */}
      <div>
        <button className="px-8 py-2 my-5 text-xl bg-black text-white dark:bg-white dark:text-black font-medium rounded-full transition-all duration-200 ease-in-out cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
