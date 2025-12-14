import React from "react";
import { useOrderContext } from "../Context/OrderContext";

function Cart() {
  const { orders, toggleCompleted, deleteOrder } = useOrderContext();

  return (
    <div className="page">
      <h2>Your Cart</h2>

      {orders.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <ul className="cart-list">
          {orders.map((order) => (
            <li key={order.id} className="cart-item">
              <span
                className={order.completed ? "completed" : ""}
                onClick={() => toggleCompleted(order.id)}
              >
                {order.name}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteOrder(order.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
