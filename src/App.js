import TextField from './components/text-field/text-field';
import './App.css';

function App() {

    function onSubmit(event) {
        event.preventDefault();
    }

  return (
      <div className="App">
          <h1>Calorie Calculator</h1>
          <form>
              <TextField
                name="Fat"
              />
              <TextField
                  name="Carbs"
              />
              <TextField
                  name="Protein"
              />
              <button type="submit"
                onClick={onSubmit}
              >Calculate</button>
          </form>
    </div>
  );
}

export default App;
