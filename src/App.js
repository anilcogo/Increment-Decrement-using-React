import { useState } from 'react';
import './App.css';

function WelcomeMessage(){
  return <h2>My first code</h2>;
}

function App(){


  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count +1);

    if (count === 10){
      alert("Max Limit reached");
      setCount(0)
    }
  };

  const decrementCount = () => {
    setCount(count - 1);
    if (count === 0){
      alert("Min Limit reached");
      setCount(0)
    }
  };


  return (

  <>
  <div className='div1'>
  <span>
  <h2>Add/Sub Using React</h2><br/>
  <button onClick={incrementCount}>+</button>
  <input value={count} />
  <button onClick={decrementCount}>-</button>
  </span>
  </div>
  </>
  );

}

export default App;