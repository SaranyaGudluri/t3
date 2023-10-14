import React, { useState } from 'react';

const ColorPicker = () => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  const colors = [
    'red',
    'lightgreen',
    'blue',
    'yellow',
    'pink',
    'skyblue',
    'lightorange',
    'violet',
    'babypink',
    'green',
    'orange',
    'lightblue',
    'brown',
    'orange',
    'blue',
    'lightyellow',
  ];

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBackgroundColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div>
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                width: '20px',
                height: '20px',
                margin: '5px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p style={{ marginTop: '10px' }}>Selected color: {selectedColor}</p>
      )}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: backgroundColor,
          transition: 'background-color 0.5s',
        }}
      >
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

export default ColorPicker;
