
import { useState } from 'react';
import './App.css';
const messages = [
  "Truly great friends are hard to find, difficult to leave, and impossible to forget.💕",
  "When friendships are real, they are not glass threads or frostwork, but the solidest things we can know.✨✨✨",
  "Real friends are the ones you can count on no matter what. The ones who go into the forest to find you and bring you home.❤️✨"
]
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1)
      setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3)
      setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="messages">
            <p>Quote {step}:{messages[step - 1]}</p>
          </div>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>

        </div>
      )}
      <Counter />
    </>


  );
}
function Counter() {
  const [st, setStepno] = useState(1);
  const [count, setCountno] = useState(0);
  const date = new Date("Oct 7,2024");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button onClick={() => setStepno((st) => st - 1)}>-</button>
        Steps:{st}
        <button onClick={() => setStepno((st) => st + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCountno((c) => c - st)}>-</button>
        Count:{count}
        <button onClick={() => setCountno((c) => c + st)}>+</button>
      </div>
      <p>
        <span>
          {count === 0 ? "Today is" : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
export default App;
