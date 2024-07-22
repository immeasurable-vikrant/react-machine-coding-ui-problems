import { useState } from "react";

const MenuItem = ({ menuItem }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        return (
          <li 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', listStyle: 'none' }}
          >
            {menuItem.name}
            {menuItem.items && menuItem.items.length > 0 && (
              <ul 
                style={{ 
                  display: isHovered ? 'block' : 'none', 
                  position: 'absolute', 
                  left: '100%', 
                  top: 0 
                }}
              >
                {menuItem.items.map((subItem) => (
                  <MenuItem key={subItem.id} menuItem={subItem} />
                ))}
              </ul>
            )}
          </li>
        );
      };
      

export default MenuItem