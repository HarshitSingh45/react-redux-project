import {useDispatch, useSelector} from 'react-redux';
import {increaseNum, decreaseNum} from './action'

function App() {
  const number = useSelector((state) => state.number);
  console.log('number', number);
  const dispatch = useDispatch();
  function increment(){
    dispatch(increaseNum());
  }
  function decrease(){
    dispatch(decreaseNum());
  }
  return (
    <div className="App">
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        {number}
      </div>
      <div>
        <button onClick={decrease}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
