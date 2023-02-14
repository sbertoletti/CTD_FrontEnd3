import React from 'react'

const Header = () => (
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
);

function Title() {
  return <h1>Título de componente Funcional.</h1>
}

const ExampleFunctionalComponent = () => {
  return (
    <div>
      <Header />
      <Title />
    </div>
  )
};

export default ExampleFunctionalComponent;