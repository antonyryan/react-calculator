import React, {useState} from 'react';
import './App.scss';

const App = () => {
  const [previousValue, setPreviousValue] = useState(0);
  const [total, setTotal] = useState(0);
  let [userInput, setUserInput] = useState('');
  
  const appendPrevious = (e) => {
    setUserInput(userInput += e.target.value);
  };

  const handleOperation = (e) => {

    if (previousValue) {
      let expressionStr = eval(`${previousValue} ${userInput}`);
      let previous = `${expressionStr} ${e.target.value}`;

      setPreviousValue(previous);
      setUserInput('');
    } else {
      let previous = `${userInput.slice()} ${e.target.value}`;

      setPreviousValue(previous);
      setUserInput('');
    }
  }

  const clearTotal = () => {
    setTotal(0);
    setUserInput('');
    setPreviousValue(0);
  }

  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__output">
          <span className="calculator__input">{previousValue ? previousValue : ''}</span>
          <span className="calculator__total">{userInput ? userInput : total}</span>
        </div>
        <div className="calculator__options">
          <button className="calculator__option calculator__option--operation" onClick={clearTotal}>C</button>
          <button className="calculator__option calculator__option--operation">±</button>
          <button className="calculator__option calculator__option--operation">%</button>
          <button className="calculator__option calculator__option--operation" value="/" onClick={(e) => handleOperation(e)}>÷</button>
          <button className="calculator__option" value="7" onClick={(e) => appendPrevious(e)}>7</button>
          <button className="calculator__option" value="8" onClick={(e) => appendPrevious(e)}>8</button>
          <button className="calculator__option" value="9" onClick={(e) => appendPrevious(e)}>9</button>
          <button className="calculator__option calculator__option--operation" value="*" onClick={(e) => handleOperation(e)}>×</button>
          <button className="calculator__option" value="4" onClick={(e) => appendPrevious(e)}>4</button>
          <button className="calculator__option" value="5" onClick={(e) => appendPrevious(e)}>5</button>
          <button className="calculator__option" value="6" onClick={(e) => appendPrevious(e)}>6</button>
          <button className="calculator__option calculator__option--operation" value="-" onClick={(e) => handleOperation(e)}>-</button>
          <button className="calculator__option" value="1" onClick={(e) => appendPrevious(e)}>1</button>
          <button className="calculator__option" value="2" onClick={(e) => appendPrevious(e)}>2</button>
          <button className="calculator__option" value="3" onClick={(e) => appendPrevious(e)}>3</button>
          <button className="calculator__option calculator__option--operation" value="+" onClick={(e) => handleOperation(e)}>+</button>
          <button className="calculator__option" value="0" onClick={(e) => appendPrevious(e)}>0</button>
          <button className="calculator__option" value="." onClick={(e) => appendPrevious(e)} disabled={userInput.indexOf('.') !== -1}>.</button>
          <div></div>
          <button className="calculator__option calculator__option--operation">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
