import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container-main">
          <div className="row">

            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9 app__main-content">
              <Switch>
                <Route path='/' exact>
                  <Navbar />
                </Route>
                <Route path='/roadmap'>
                  <Roadmap />
                </Route>
              </Switch>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;