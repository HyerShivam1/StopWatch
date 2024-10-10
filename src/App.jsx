import {useState, useRef} from 'react'
import './App.css'

function App() {
 const[count, setCount] = useState(0);

 let timerRef = useRef();


function startTimer(){
  timerRef.current = setInterval(() => {
    setCount(count =>count + 1)
  }, 1000);
}
function stopTimer(){
  clearInterval(timerRef.current)
  timerRef.current = '';
}
function reset(){
  stopTimer();
  setCount(0)
}

  return (
    <div>

      
      <h1>Stop Watch : {count} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br/>
      <br/>
      <button onClick={stopTimer}>Stop</button>
      <br/>
      <br/>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
