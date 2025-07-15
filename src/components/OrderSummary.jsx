const OrderSummary = () => {
  return (
    <div className="border-2 dark:border-white dark:text-white">
      <h1 className="text-2xl font-bold border-b-2 uppercase p-3">
        Order Summary
      </h1>
      {/* SubTotal */}
      <div className="flex justify-between px-6 py-4">
        <h3 className="text-xl font-bold uppercase">SubTotal</h3>
        <span className="text-xl">₹5</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between px-6 py-4">
        <h3 className="text-xl font-bold uppercase">Shipping</h3>
        <span className="text-lg">Free</span>
      </div>

      {/* Postage */}
      <div className="flex justify-between px-6 py-4">
        <h3 className="text-xl font-bold uppercase">Postage</h3>
        <span className="text-lg">100</span>
      </div>

      {/* Total */}
      <div className="flex justify-between px-6 py-3 border-t-2 border-b-2">
        <h3 className="text-xl font-bold uppercase">Total</h3>
        <span className="text-lg">105</span>
      </div>

      {/* Checkout */}
      <button className="w-full p-4 hover:bg-gray-200 text-xl font-bold uppercase transition-all duration-200 ease-in-out">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
