import React from 'react';
import './App.css';

interface Protocol
{
  name: string,
  fields: {
    name: string,
    size?: number, // In bytes
    minSize?: number, // In bytes
    maxSize?: number, // In bytes
  }[],
  options?: {
    showInGrid?: boolean,
  },
}

const PROTOCOL_EOL = { name: "EOL", size: 0, };

const ROW_HEIGHT = 75;

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
        { name: "Data", minSize: 46, maxSize: 1500, },
        { name: "Frame Check Sequence", size: 4, },
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
        PROTOCOL_EOL,
        { name: "Identification", size: 2, },
        { name: "Flag", size: 0.375, },
        { name: "Fragment Offset", size: 1.625, },
        PROTOCOL_EOL,
        { name: "Time-to-Live", size: 1, },
        { name: "Protocol", size: 1, },
        { name: "Header Checksum", size: 2, },
        PROTOCOL_EOL,
        { name: "Source IPv4 Address", size: 4, },
        PROTOCOL_EOL,
        { name: "Destination IPv4 Address", size: 4, },
      ],
      options: { showInGrid: true, },
    },
    {
      name: "IPv6",
      fields: [
        { name: "Version", size: 0.5, },
        { name: "Traffic Class", size: 1, },
        { name: "Flow Label", size: 2.5, },
        PROTOCOL_EOL,
        { name: "Payload Length", size: 2, },
        { name: "Next Header", size: 1, },
        { name: "Hop Limit", size: 1, },
        PROTOCOL_EOL,
        { name: "Source IPv6 Address", size: 16, },
        PROTOCOL_EOL,
        { name: "Destination IPv6 Address", size: 16, },
      ],
      options: { showInGrid: true, },
    },
    /*
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
          <div className="ProtocolFields">
            {
              this.state.protocol.fields?.map((field, index) =>
                field === PROTOCOL_EOL ? <br key={`EOL-${index}`}></br> :
                <div key={field.name} className="ProtocolField" style={
                  this.state.protocol.options?.showInGrid
                    ? {
                        width: `${(field.size as number) * 100 / 4}%`,
                        maxWidth: "100%",
                        height: `${ROW_HEIGHT * Math.max(1, Math.trunc((field.size as number) / 4))}px`,
                      }
                    : {
                        height: `${ROW_HEIGHT}px`,
                      }
                }>
                  <p className="ProtocolFieldName">{field.name}</p>
                  <p className="ProtocolFieldSize">
                    {
                      field.size != null
                        ? `${field.size * 8} Bit (${field.size} Byte)`
                        : `${(field.minSize as number) * 8} Bit (${field.minSize} Byte) - ${(field.maxSize as number) * 8} Bit (${field.maxSize} Byte)`
                    }
                  </p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
