import useCounter from "./useCounter";
function App() {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
