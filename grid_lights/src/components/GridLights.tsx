import { useState } from "react";
import "./styles.css";
const GridLights = (props) => {
  const { config } = props;
  const [colors, setColors] = useState([])

  const deactivateCells = () => {
        debugger
        
        let timerId = setInterval(() => {
                setColors((prev) => {
                        const newColors = [...prev]
                        newColors.pop()
                        if(colors.length === 0){
                                clearInterval(timerId)
                        }
                        return newColors
                })
        }, 1000)

  }

  const handleActivateCells = (idx: number) => {
        const newOrder = [...colors, idx]
        setColors(newOrder)

        console.log(colors.length, config.flat(1).filter(Boolean).length)

        if(colors.length === config.flat(1).filter(Boolean).length - 1){
                debugger
                deactivateCells()
                return
        }
  };

  console.log("colors", colors)
  return (
    <div
      className="grid_container"
      style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {config.flat().map((item: number, idx: number) => {
        if (item === 1) {
          return (
            <button
              disabled={colors.length === config.flat().filter(Boolean).length || colors.includes(idx)}
              key={`${idx}-${item}`}
              style={{
                height: "54px",
                width: "54px",
                margin: "8px",
                cursor: "pointer",
                backgroundColor: `${colors.includes(idx) ? 'green': ''}`
              }}
              onClick={() => handleActivateCells(idx)}
            ></button>
          );
        } else {
          return <span />;
        }
      })}
    </div>
  );
};

export default GridLights;
