import React from 'react';
import './App.css';

interface Protocol
{
  name: string,
  fields: {
    name: string,
    size: number, // In bytes
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
      ],
    },
    {
      name: "IPv4",
      fields: [
        { name: "Version", size: 0.5, },
        { name: "Internet Header Length", size: 0.5, },
        { name: "Differentiated Services Code Point", size: 0.75, },
        { name: "Explicit Congestion Notification", size: 0.25, },
        { name: "Total Length", size: 2, },
        { name: "Identification", size: 2, },
        { name: "Flag", size: 0.375, },
        { name: "Fragment Offset", size: 1.625, },
        { name: "Time-to-Live", size: 1, },
        { name: "Protocol", size: 1, },
        { name: "Header Checksum", size: 2, },
        { name: "Source IPv4 Address", size: 4, },
        { name: "Destination IPv4 Address", size: 4, },
      ],
    },
    /*
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
              <button key={protocol.name} onClick={() => this.setState({ protocol })} className="ProtocolListTile">{protocol.name}</button>
            )
          }
        </ul>
        <div className="Protocol">
          <h1 className="ProtocolTitle">{this.state.protocol.name}</h1>
          {
            this.state.protocol.fields?.map((field) =>
              <div key={field.name} className="ProtocolField">
                <p className="ProtocolFieldName">{field.name}</p>
                <p className="ProtocolFieldSize">{field.size}</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
