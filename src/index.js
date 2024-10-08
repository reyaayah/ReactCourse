import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = { color: "red", fontSize: "48px" }
  return (
    <div>
      <h1 style={style}>PIZZA HUB</h1>
    </div>
  )
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className='menu'>
      <h2>Our Menu</h2>
      <p>We serve delicious Pizza in the town.</p>
      {
        numPizzas > 0 ? (
          <>
            <ul className='pizzas'>
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please comeback later!</p>
        )
      }


      {/* <Pizza name="Pizza Spinaci" ingredients="Tomato,mozarella,spinach,and ricotta cheese" photoName="image.png" price={10} />

      <Pizza name="Pizza Funghi" ingredients="Tomato Mushrooms" price={12} photoName="funghi.jpg" /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + 5}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return <footer className='footer'>
    {/* 
    {new Date().toLocaleTimeString()}. We're currently open */}

    {isOpen ? (
      <Order closeHour={closeHour} openHour={openHour} />
    ) : (
      <p>We will be open from {openHour}:00 to {closeHour}:00. Thank You!</p>
    )
    }

  </footer>
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>We're  open from {openHour}:00 until {closeHour} :00 . Come visit us or order online. </p>
      <button className='btn'>Order</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


