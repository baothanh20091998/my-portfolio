import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { mainRoutes } from "./main/config/main.config";
import MainTemplate from "./main/template/main.template";

function App() {
  const renderMainRoute = mainRoutes.map((route, index) => {
    const { Component, exact, path } = route;
    return (
      <Route path={path} exact={exact} key={index}>
        <MainTemplate>
          <Component />
        </MainTemplate>
      </Route>
    );
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderMainRoute}
          <Route>
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
