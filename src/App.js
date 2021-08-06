import Heading from './Components/Header/Heading/Heading';
import logo from './logo.svg';
import './App.css'
import Body from './Components/Body/Body';

function App() {
  return (
    <div>
      <Heading></Heading>
      <div className="body__section">
          <Body></Body>
      </div>
    </div>
  );
}

export default App;