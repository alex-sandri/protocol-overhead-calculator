import React from 'react';
import './App.css';

interface Protocol
{
  name: string,
}

class App extends React.Component
{
  private protocols: Protocol[] = [
    {
      name: "Ethernet",
    },
    {
      name: "IPv4",
    },
    {
      name: "IPv6",
    },
    {
      name: "TCP",
    },
    {
      name: "UDP",
    },
  ]

  state = {
    protocol: {} as Protocol,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Protocol Overhead Calculator</h1>
        </header>
        <ul className="ProtocolsListView">
          {
            this.protocols.map((protocol) =>
              (<button key={protocol.name} onClick={() => this.setState({ protocol })} className="ProtocolListTile">{protocol.name}</button>))
          }
        </ul>
        <div>{this.state.protocol.name}</div>
      </div>
    );
  }
}

export default App;
