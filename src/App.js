
import './App.css';
import Header from './Header';
import Name from './Name';
import Welcome from './Welcome';
import Whishes from './Whishes';


function App() {
  return (
    <div className="App">
      <h1>hii vidhi gupta</h1>
      <Header />
      <Name />
      <Whishes name= "vidhi" hobby="cricket" >
      <p> Vidhi gupta this side</p>
      <button>Click here</button>
      </Whishes>
      <Whishes name= "clark" hobby="football" />
      <Whishes name= "james" hobby="chess" >
        <button>Submit Here</button>
      </Whishes>
      <Welcome name="Vidhi" hobby="Coding" />
    </div>
  );
}

export default App;
