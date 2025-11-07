
function MenuBakery({ menu, selectedItems, onSelect }) {
  return (
    <div className="menu-bakery">
      <h2>{menu.title}</h2>
      <div className="menu-items">
        <div className="menu-section">
          {menu.items.map((item) => (
            <label key={item.id} style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="checkbox"
                checked={selectedItems[item.title] || false}
                onChange={() => onSelect(item)}
              />
              {item.title} {item.price}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuBakery;