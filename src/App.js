import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Splash from './components/pages/Splash'
import Play from './components/pages/Play'
import questions from "./assets/Apprentice_TandemFor400_Data.json"

function App() {
  const [playerName, setPlayerName] = useState('')

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ questions, playerName, setPlayerName }}>
        <Switch>
          <Route exact path="/" render={(props) => <Splash />} />
          <Route path="/play" render={(props) => <Play />} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
