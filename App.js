import React, { useState } from 'react';
import ShowItems from './PlaceOrder/ShowItems';
import Payments from './PlaceOrder/Payments';
import Address from './PlaceOrder/Address';
import PlaceOrderAction from './PlaceOrder/PlaceOrderAction';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 0 },
    // Add more items
  ]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    // Other address fields
  });

  const handleQuantityChange = (itemId, quantity) => {
    setItems(prevItems => prevItems.map(item => item.id === itemId ? { ...item, quantity } : item));
  };

  const handlePaymentSelect = (paymentId) => {
    setSelectedPayment(paymentId);
  };

  const handleAddressChange = (newAddress) => {
    setShippingAddress(newAddress);
  };

  const handlePlaceOrder = () => {
    // Logic to place the order using the selected items, payment, and address
  };

  return (
    <div>
      <ShowItems items={items} onQuantityChange={handleQuantityChange} />
      <Payments paymentMethods={paymentMethods} selectedMethod={selectedPayment} onMethodSelect={handlePaymentSelect} />
      <Address address={shippingAddress} onAddressChange={handleAddressChange} />
      <PlaceOrderAction onSubmit={handlePlaceOrder} />
    </div>
  );
};

export default App;
