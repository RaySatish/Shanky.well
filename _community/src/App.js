// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={JoinPage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </Router>
  );
}

export default App;