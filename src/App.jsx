import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import C from './pages/blog_content/C';
import CommonMistakes from './pages/blog_content/CommonMistakes';
import Cpp from './pages/blog_content/Cpp';
import DSA from './pages/blog_content/DSA';
import Fastio from './pages/blog_content/Fastio';
import Fullstack from './pages/blog_content/Fullstack';
import Keypoints from './pages/Keypoints';
import Practice from './pages/Practice';
import Roadmap from './pages/Roadmap';
// import '../node_modules/bootswatch/dist/minty/bootstrap.min.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container-main">
          <div className="row">

            <div className="col-lg-3 app__sidebar">
              <Sidebar />
            </div>

            <div className="col-lg-9 app__main-content">
              <Switch>
                <Route path='/' exact>
                  <Navbar />
                </Route>
                <Route path='/keypoints' exact>
                  <Keypoints />
                </Route>
                <Route path='/roadmap' exact>
                  <Roadmap />
                </Route>
                <Route path='/roadmap/c'>
                  <C />
                </Route>
                <Route path='/roadmap/cpp'>
                  <Cpp />
                </Route>
                <Route path='/roadmap/dsa'>
                  <DSA />
                </Route>
                <Route path='/roadmap/fullstack'>
                  <Fullstack />
                </Route>
                <Route path='/practice&learn'>
                  <Practice />
                </Route>
                <Route path='/keypoints/fastio'>
                  <Fastio />
                </Route>
                <Route path='/keypoints/common-mistakes'>
                  <CommonMistakes />
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