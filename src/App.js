import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

// Bootstrap components.
import { Container } from 'reactstrap';

// Custom components.
import Home from './pages/Home/home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container
        fluid
        id="display"
        className="p-0">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
