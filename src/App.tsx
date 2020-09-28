import React from 'react';
import './App.css';

interface Protocol
{
  name: string,
  fields: {
    name: string,
    size: number,
  }[],
}

class App extends React.Component
{
  private protocols: Protocol[] = [
    {
      name: "Ethernet",
      fields: [
        { name: "Preamble", size: 7, },
        { name: "Start Frame Delimiter", size: 1, },
        { name: "Destination MAC Address", size: 6, },
        { name: "Source MAC Address", size: 6, },
        { name: "EtherType", size: 2, },
        { name: "Data", size: 7, },
        { name: "Frame Check Sequence", size: 7, },
      ]
    },
    /*
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
    */
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
        <div className="Protocol">
          <h1 className="ProtocolTitle">{this.state.protocol.name}</h1>
          {
            this.state.protocol.fields?.map((field) =>
              (<div key={field.name} className="ProtocolField">
                <p className="ProtocolFieldName">{field.name}</p>
                <p className="ProtocolFieldSize">{field.size}</p>
              </div>))
          }
        </div>
      </div>
    );
  }
}

export default App;
