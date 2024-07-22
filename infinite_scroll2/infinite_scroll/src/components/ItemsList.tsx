const ItemsList = ({ items }) => {
  return (
    <div>
      {items &&
        items.length > 0 &&
        items.map((item) => {
          return <div  style={{display: "flex", alignItems: 'center', justifyContent: 'flex-start', border: '1px solid darkgray', borderRadius: '8px', padding: '16px', margin: '12px'}}>{item.title}</div>;
        })}
    </div>
  );
};

export default ItemsList;
