import React from 'react'
import './css/bootstrap-grid.min.css'
import './css/style.css'
import './App.css'
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Faq from "./Faq";
import GiveToys from "./GiveToys";
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'
import myFunc from "./jsfront";
import 'slick-carousel/slick/slick.min'
import ReactGA from 'react-ga'

function usePageViews(){
  let location = useLocation();

  useEffect(() => {
    if(!window.GA_INITIALIZED){
      ReactGA.initialize("G-D94EQ8J0MD");
      window.GA_INITIALIZED = true;
    }

    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }, [location]);
}


function App() {
  usePageViews();

  const [compName, setCompName] = useState('index');
  useEffect(() => {
    myFunc();
  });

  return (
    <>
      <Header compName ={compName} changeCompName={() => setCompName}/>
      <Switch>
        <Route exact path={'/'}>
          <Info />
        </Route>
        <Route path = {'/about'}>
          <About />
        </Route>
        <Route path={'/faq'}>
          <Faq />
        </Route>
        <Route path={'/givetoys'}>
          <GiveToys />
        </Route>
      </Switch>
    </>
  );
}

export default App;
