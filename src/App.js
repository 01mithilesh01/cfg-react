import "./App.css";
import { Header } from "./components/Header";
import { Events } from "./components/Events";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import { EventCard } from "./components/EventCard";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Events />
                </>
              );
            }}
          ></Route>
        </Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/dashboard">
          <EventCard />
        </Route>

      </Router>
    </>
  );
}
export default App;
