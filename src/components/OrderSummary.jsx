const OrderSummary = () => {
  return (
    <div className="border-2">
      <h1 className="text-2xl font-bold border-b-2 uppercase">
        Order Summary
      </h1>
      {/* SubTotal */}
      <div className="flex justify-between">
        <h3 className="text-xl font-bold uppercase">SubTotal</h3>
        <span className="text-xl">₹5</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between">
        <h3 className="text-xl font-bold uppercase">Shipping</h3>
        <span className="text-lg">Free</span>
      </div>
    </div>
  );
};

export default OrderSummary;
