
const initialitems = [
  {
    id: 1, description: "Passports", quantity: 2, packed: true
  },
  {
    id: 2, description: "Charger", quantity: 2, packed: true
  },
  {
    id: 3, description: "Socks", quantity: 5, packed: false
  }
]

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}
function Logo() {
  return <h1 className="logo">✈️🚢TimeTamer🌟👜</h1>
}
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h1>What do you need for your trip🥰?</h1>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button className="add">Add</button>
    </form>
  )
}

function PackingList() {
  return <div className="list">
    <ul>
      {initialitems.map((item) => (
        <Item item={item} />
      ))}
    </ul>
  </div>
}
function Item({ item }) {
  return (<li>
    <span style={item.packed ? { textDecoration: "line-through" } : {}}> {item.quantity} {item.description}</span>
    <button>❌</button>
  </li>
  )
}
function Stats() {
  return (
    <footer className="stats">You have X items in the list, and You already packed X items</footer>
  )
}