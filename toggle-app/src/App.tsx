import useToggle from './useToggle';
function App() {
  const [isToggled, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isToggled ? 'Hide' : 'Show'}</button>
      {isToggled ? <div>This content is hidden! Spoiler!</div> : ''}
    </div>
  );
}

export default App;
