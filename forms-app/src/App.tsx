import './App.css';
import FeedbackForm from './FeedbackForm';
import RegistrationForm from './RegistrationForm';
import useToggle from './useToggle';

function App() {
  const [isToggled, toggle] = useToggle();

  function renderForm() {
    if (isToggled) return <FeedbackForm />;

    return <RegistrationForm />;
  }

  return (
    <div className="App">
      <button onClick={() => {
        toggle();
      }}>Show {isToggled ? 'Registration' : 'Feedback'} Form</button>
      {renderForm()}
    </div>
  );
}

export default App;
