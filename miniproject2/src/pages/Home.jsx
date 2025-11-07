import MenuBakery from "../components/MenuBakery";
// import { createContext, useContext, useState } from "react";
import { useOrderContext } from "../Context/OrderContext";

function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [orders, setOrders] = useState([]); // List of order 
//   const [selectedItems, setSelectedItems] = useState({});

const {
    orders,
    selectedItems,
    setSelectedItems,
    addOrders,
    toggleCompleted,
    deleteOrder,
  } = useOrderContext();
 

//   const addOrder = ()=>{
// const newOrder = {};
// setOrders([...orders, newOrder ])
// }


    

  const menu = [
    {
      id: 1,
      title: "Pastries:",
      items: [
        { id: 1, title: "Croissant", price: "$5" },

        { id: 2, title: "Cookies", price: "$6" },

        { id: 3, title: "Macarons", price: "$3" },
      ],
    },
    {
      id: 2,
      title: "Cakes:",
      items: [
        { id: 1, title: "Chocolate Cake", price: "$12" },
        { id: 2, title: "Carrot Cake", price: "$14" },
        { id: 3, title: "Red Velvet Cake", price: "$13" },
      ],
    },

    {
      id: 3,
      title: "Drinks:",
      items: [
        { id: 1, title: "Iced Coffee", price: "$8" },
        { id: 2, title: "Milk Shake", price: "$12" },
        { id: 3, title: "Hot Chocolate", price: "$9" },
      ],
    },
  ];

  const handleSelect = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.title]: !prev[item.title],
    }));
  };

  // Create orders
   const handleOrder = (e) => {
    e.preventDefault();
    addOrders();
  };

  return (
    <div className="home">
      <div className="menu-grid">
        {menu.map((menuSection) => (
          <MenuBakery
            key={menuSection.id}
            menu={menuSection}
            selectedItems={selectedItems}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <form onSubmit={handleOrder} className="search-form">
        <button type="submit" className="search-button">
          Order
        </button>
      </form>

      <div className="orders-list">
        <h2>Your Orders</h2>
        {orders.length === 0 && <p>No orders yet.</p>}
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <input
                type="checkbox"
                checked={order.completed}
                onChange={() => toggleCompleted(order.id)}
              />
              <span
                style={{
                  textDecoration: order.completed ? "line-through" : "none",
                }}
              >
                {order.name}
              </span>
              <button onClick={() => deleteOrder(order.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;


//   const handleSearch = (e) => {
//     e.preventDefault();
//     addOrder()

//     //CHANGE IT:
//     const checkedList = Object.values(checkedItems).filter; 

    
//   if (checkedList.length > 0) {
//     alert(`You have ordered: \n${orderList.join("\n")}`);
//     } else {
//       alert("Please select at least one item to order.");
//       return;
//     };
//     };

//   const newOrders = selectedList.map((item, index) => ({
//       id: Date.now() + index,
//       name: `${item.title} ${item.price}`,
//       completed: false,
//     }));

//     setOrders((prev) => [...prev, ...newOrders]);
//     setSelectedItems({}); //clean checkboxes
// };

// const handleDelete = (id) => {
//     setOrders((prev) => prev.filter((order) => order.id !== id));
//   };

//   const toggleCompleted =(id) => {
//     setOrders((prev) =>
//       prev.map((order) =>
//         order.id === id ? { ...order, completed: !order.completed } : order
//       )
//     );
//   };

//   return (
//     <div className="home">
//       <div className="menu-grid">
//         {menu.map((menuSection) => (
//           <MenuBakery key={menuSection.id} 
//           menu={menuSection}
//           selectedItems={selectedItems}
//           onSelect={handleSelect}
//            />
//         ))}
//       </div>

//       <form onSubmit={handleSearch} className="search-form">
//            <button type="submit" className="search-button">
//           Order
//         </button>
//       </form>

// <div className="orders-list">
//         <h2>Your Orders</h2>
//         {orders.length === 0 && <p>No orders yet.</p>}
//         <ul>
//           {orders.map((order) => (
//             <li key={order.id} className="order-item">
//               <input
//                 type="checkbox"
//                 checked={order.completed}
//                 onChange={() => toggleCompleted(order.id)}
//               />
//               <span
//                 style={{
//                   textDecoration: order.completed ? "line-through" : "none",
//                 }}
//               >
//                 {order.name}
//               </span>
//               <button onClick={() => handleDelete(order.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );



// {/* {orderList.length} */}

 

// export default Home;
