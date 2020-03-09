import React, { FunctionComponent } from "react";

//project imports
import './styles/bootstrap.scss';
import './styles/global.scss';

// project components
import Home from "./pages/home";
import AppLayout from "./components/AppLayout";

const App: FunctionComponent = () => (
  <div className="App">
    <AppLayout>
      <Home />
    </AppLayout>
  </div>
);

export default App;
