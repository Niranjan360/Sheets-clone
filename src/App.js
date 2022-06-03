
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom' 
import Home from './Home'
import Sheets from './Sheets'
import Navbar from './Navbar'
import Details from './Details';
import Update from './Update';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/sheets">
            <Sheets/>
          </Route>

          <Route path="/details:id">
            <Details/>
          </Route>

          <Route path="/update:id">
            <Update/>
          </Route>

        </Switch>
    </div>
    </Router>
  );
}

export default App;
