import React from 'react';
import './App.css';

class App extends React.Component
{
  state = {
    protocol: "",
  }

  private showProtocol(protocol: string) {
    this.setState({ protocol })

    switch (protocol)
    {
      case "Ethernet":
        break;
      case "IPv4":
        break;
      case "IPv6":
        break;
      case "TCP":
        break;
      case "UDP":
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Protocol Overhead Calculator</h1>
        </header>
        <ul className="ProtocolsListView">
          {
            [ "Ethernet", "IPv4", "IPv6", "TCP", "UDP" ].map((protocol) =>
              (<button key={protocol} onClick={() => this.showProtocol(protocol)} className="ProtocolListTile">{protocol}</button>))
          }
        </ul>
        <div>{this.state.protocol}</div>
      </div>
    );
  }
}

export default App;
