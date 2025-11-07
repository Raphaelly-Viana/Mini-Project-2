function MenuItem({ item, checked, onSelect }) {
    const {title, price } = {...item}
  return (
    <label className="menu-item">
      <input 
      type="checkbox"
      checked={checked}
      onChange={(e) => onSelect(title, price, e.target.checked)}

    />
    {/* //   name={title.toLowerCase().split(" ").join("-")} 
    //   value= {`${title} ${price}`} /> */}
        {title} {price}
    </label>
  );
}

export default MenuItem;
