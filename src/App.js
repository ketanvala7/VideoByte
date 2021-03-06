import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter,HashRouter } from 'react-router-dom'
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import MovieDetails from './components/MovieDetails';
import 'fa-icons';
import 'font-awesome/css/font-awesome.min.css';
import Search from './components/Search';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
          <Search />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={(props) => <MovieDetails {...props} />} />
          </Switch>
          <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
