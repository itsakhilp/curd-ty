import React from 'react';

class GetDate extends React.Component {
  state = {
    curDT: new Date().toLocaleString(),
  }
  render() {
    return (
      <div className="App" style={{ marginLeft: "20px" }}>
        <p>{this.state.curDT.slice(0, 8)}</p>
      </div>
    );
  }
}

export default GetDate;

