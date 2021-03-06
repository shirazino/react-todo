import { TaskHead } from "./components/taskHeader";
import IconBar from "./components/iconbar";
import { Sidebar } from "./components/Sidebar";
import { Taskdeets } from "./components/Taskdeets";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import MyCalendar from "./components/calendar";
import Settings from "./components/settings";
import About from "./components/about";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <div className="grid">
            <IconBar />
            <Sidebar />
            <TaskHead />
            <Taskdeets />
          </div>
        </Route>
        <Route exact path="/calendar">
          <div className="gridCalendar">
            <IconBar />
            <MyCalendar />
          </div>
        </Route>
        <Route exact path="/about">
          <div className="gridSettings">
            <IconBar />
            <About />
          </div>
        </Route>
        <Route exact path="/settings">
          <div className="gridSettings">
            <IconBar />
            <Settings />
          </div>
        </Route>
        <Route
          path="/"
          render={() => (
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <h1>404 Not Found ⛔</h1>
              <p className="mt-3">are you lost?</p>
              <a href="/">home</a>
              <a href="/calendar">calendar</a>
            </div>
          )}
        ></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
