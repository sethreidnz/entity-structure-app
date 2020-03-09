import React, { FunctionComponent } from "react";

const AppLayout: FunctionComponent = ({ children }) => (
  <div className="AppLayout">
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Entity Structure App</span>
    </nav>
    <div className="container-fluid">{children}</div>
  </div>
);

export default AppLayout;
