import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Content from '../Content/Content';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/2" component={Content} />
            <Route exact path="/3" component={Support} />
            <Route exact path="/4" component={Comments} />
            <Route exact path="/5" component={SubmissionSuccess} />
            <Route exact path="/admin" component={Admin} />
            <br />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
