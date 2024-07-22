import React from 'react';
import MenuItems from './MenuItems';

interface MenuItem {
  title: string;
  subMenu?: MenuItem[];
}

interface DropdownProps {
  subMenus: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown: React.FC<DropdownProps> = ({ subMenus, dropdown, depthLevel }) => {
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {subMenus.map((subMenu, index) => {
        return <MenuItems items={subMenu} key={index} depthLevel={depthLevel} />;
      })}
    </ul>
  );
};

export default Dropdown;
