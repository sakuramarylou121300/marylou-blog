import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* every single route */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
