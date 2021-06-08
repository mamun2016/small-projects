import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import BirthdayReminder from './projects/birthday-reminder/BirthdayReminder';
import Tours from './projects/tours/Tours';
import Reviews from './projects/reviews/Reviews';
import Accordion from './projects/accordion/Accordion';
import UnderConstruction from './components/UnderConstruction';
import Menu from './projects/menu/Menu';
import Tabs from './projects/tabs/Tabs';
import Slider from './projects/slider/Slider';
import Lipsum from './projects/lipsum/Lipsum';

function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <h1 className="title-main">
            <Link to="/">My pet projects</Link>
          </h1>
        </div>
      </header>

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/birthday-reminder" component={BirthdayReminder} />
          <Route path="/tours" component={Tours} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/accordion" component={Accordion} />
          <Route path="/menu" component={Menu} />
          <Route path="/tabs" component={Tabs} />
          <Route path="/slider" component={Slider} />
          <Route path="/lorem-ipsum" component={Lipsum} />
          <Route component={UnderConstruction} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
