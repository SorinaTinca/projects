import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  return (
    <div className="app">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="container">
          <div className="steps">
            <span className={step >= 1 ? "step active" : ""}>1</span>
            <span className={step >= 2 ? "step active" : ""}>2</span>
            <span className={step >= 3 ? "step active" : ""}>3</span>
          </div>
          <h2>
            Step {step} : {messages[step - 1]}
          </h2>
          <div className="btns">
            <button className="btn" onClick={handlePrevious}>
              Previous
            </button>
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
