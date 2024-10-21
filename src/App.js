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
  return <div className="add-form">
    What do you need for your trip?
  </div>
}
function PackingList() {
  return <div className="list">
    <h1>LIST</h1>
  </div>
}
function Stats() {
  return (
    <footer className="stats">You have X items in the list, and You already packed X items</footer>
  )
}