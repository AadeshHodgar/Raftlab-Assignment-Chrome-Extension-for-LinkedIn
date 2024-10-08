import React from 'react';
import './App.css';

const App = () => {
  const connectWithAll = () => {
    // Select buttons that contain "Connect" or similar text
    const connectButtons = Array.from(document.querySelectorAll('button'))
      .filter(button => 
        button.innerText.trim().toLowerCase().includes('connect') || 
        button.innerText.trim().toLowerCase().includes('connect now')
      );

    console.log(connectButtons); // Log the found buttons

    if (connectButtons.length === 0) {
      alert('No connectable profiles found.');
      return;
    }

    // Click on each button with a delay
    connectButtons.forEach((button, index) => {
      setTimeout(() => {
        button.click();
      }, index * 2000); // 2 seconds delay between requests
    });
  };

  return (
    <div className="App">
      <button onClick={connectWithAll} className="connect-btn">
        Connect with All
      </button>
    </div>
  );
};

export default App;
