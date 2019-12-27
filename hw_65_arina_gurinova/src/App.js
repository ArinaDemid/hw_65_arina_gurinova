import React from 'react';
import {Container} from 'reactstrap';
import Navigation from './components/UI/Navigation/Navigation';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Quotes from './containers/Quotes/Quotes';
import NewQuote from './containers/NewQuote/NewQuote';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navigation/>
        <Switch>
          <Route path="/pages/admin" exact component={NewQuote}/>
          <Route path="/pages/:name" exact component={Quotes}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
  
export default App;
