import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './home/home';
import Bio from './bio/bio';
import Projects from './projects/projects';
import Future from './future/future';
import Contact from './contact/contact';
import NavBar from './nav/NavBar';
import './App.css';

class App extends React.Component {

  renderRoutes = () => {
    return (
      <>
        <Route exact path='/' component={Home} />

        <Route path='/bio' component={Bio} />

        <Route path='/projects' component={Projects} />

        <Route path='/future' component={Future} />

        <Route path='/contact' component={Contact} />
      </>
    )
  }

  render () {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Adrian Marquis <br></br> web developer | 3D animator | video game developer</h1>
      </header>
      <main className='App__main'>{this.renderRoutes()}</main>
    </div>
  )
  }
}

export default withRouter(App);