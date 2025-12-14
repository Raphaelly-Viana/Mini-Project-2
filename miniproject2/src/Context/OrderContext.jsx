import { createContext, useContext, useState } from "react";

// Creating the context
 const OrderContext = createContext();


export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  const addOrders = () => {
    const selectedList = Object.entries(selectedItems)
      .filter(([_, checked]) => checked)
      .map(([name]) => name);

    if (selectedList.length === 0) {
      alert("Please select at least one item to order.");
      return;
    }

    const newOrders = selectedList.map((name, index) => ({
      id: Date.now() + index,
      name,
      completed: false,
    }));

    setOrders((prev) => [...prev, ...newOrders]);
    setSelectedItems({});
  };

  const toggleCompleted = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, completed: !order.completed } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        selectedItems,
        setSelectedItems,
        addOrders,
        toggleCompleted,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Hook 
export const useOrderContext = () => useContext(OrderContext);
