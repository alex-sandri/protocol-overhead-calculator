import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Protocol Overhead Calculator</h1>
      </header>
      <ul className="ProtocolsListView">
        {
          [ "Ethernet", "IPv4", "IPv6", "TCP", "UDP" ].map((protocol, index) =>
            (<button key={protocol} className="ProtocolListTile">{protocol}</button>))
        }
      </ul>
    </div>
  );
}

export default App;
