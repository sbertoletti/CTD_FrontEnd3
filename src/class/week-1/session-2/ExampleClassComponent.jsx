import React, { Component } from 'react';

class ExampleClassComponent extends Component {

  Header() {
    return (
      <header style={{ width: "100%" }}>
        <nav style={{ width: "100%", border: "1px solid #43562767" }}>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            {
              ["One", "Two", "Three"].map(menu => (
                <li key={menu} style={{ cursor: "pointer" }}>{menu}</li>
              ))
            }
          </ul>
        </nav>
      </header>
    )
  }

  Title() {
    return <h1>Título de componente de clase.</h1>
  }
  render() {
    return (
      <div>
        {this.Header()}
        <this.Title />
      </div>
    );
  }
}

export default ExampleClassComponent;
