import MenuItem from './MenuItem'
const Navbar = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
