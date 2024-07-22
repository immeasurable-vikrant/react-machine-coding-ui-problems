import useTheme from "../hooks/useTheme";
const Header = () => {
  const { theme, toggleTheme} = useTheme()
  return (
    <div >
      <nav style={{display: 'flex', justifyContent: 'space-between', gap: '12px'}}>
        <ul style={{display: 'flex', width: '100%', listStyle: 'none'}}>
          <li style={{margin: '0 24px', cursor: 'pointer'}}><a href="/">Home</a></li>
          <li style={{margin: '0 24px', cursor: 'pointer'}}><a href="/about">About</a></li>
          <li style={{margin: '0 24px', cursor: 'pointer'}}><a href="/contact">Contact</a></li>
        </ul>
        <div style={{margin: '0 24px', cursor: 'pointer'}} onClick={toggleTheme}>{theme ==='dark' ? "☀️" : "🌙"}</div>
      </nav>
    
    </div>
  );
};

export default Header;
