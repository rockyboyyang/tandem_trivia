import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Splash from './components/pages/Splash'

function App() {
  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={{  }}> */}
        <Switch>
          <Route exact path="/" render={(props) => <Splash />} />
        </Switch>
      {/* </AppContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
