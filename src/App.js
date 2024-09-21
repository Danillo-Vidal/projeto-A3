import './App.css';
import Description from './components/Description';
import './components/Header';
import Header from './components/Header';
import './components/Button';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <div className="text-container">
        <Header />
        <Description />
        <Button />
      </div>
      
    </div>
  );
}


export default App;
