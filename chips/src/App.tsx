import { useState } from 'react';
import './App.css';
import Chips from './components/Chips';

function App() {
  const [value, setValue] = useState('');
  const [chipsData, setChipsData] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      setChipsData((prev) => [...prev, value.trim()]);
      setValue('');
    }
  };

  const handleRemove = (chip) => {
    setChipsData((prev) => prev.filter((item) => item !== chip));
  };

  return (
    <>
      <Chips 
        value={value} 
        handleChange={handleChange} 
        handleKeyDown={handleKeyDown} 
        chipsData={chipsData} 
        handleRemove={handleRemove} 
      />
    </>
  );
}

export default App;
