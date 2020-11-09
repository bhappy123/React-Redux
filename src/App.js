
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Actions';

function App() {
  const auth = useSelector(state => state.auth)
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      {!auth ?
        <div>
          <h2>Hello {counter}</h2>
          <button onClick={() => { dispatch(increment()) }}>+</button>
          <button onClick={() => { dispatch(decrement()) }}>-</button>
        </div> :
        <h2>Log In first</h2>}
    </div>
  );
}

export default App;
