import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Notfound from './Notfound';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
