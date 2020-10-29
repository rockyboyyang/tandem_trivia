import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from './context/AppContext'
import Splash from './components/pages/Splash'
import json from "./assets/Apprentice_TandemFor400_Data.json"

function App() {
  const [questions, setQuestions] = useState(json)
  
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
