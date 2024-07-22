import React from 'react';
import MenuItems from './MenuItems';

interface MenuItem {
  title: string;
  subMenu?: MenuItem[];
}

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={0} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
