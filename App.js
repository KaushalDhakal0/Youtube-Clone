import "./App.css";
import Header from "./Components/Header";
import Rec from "./Components/Recommendation";
import Sidebar from "./Components/Sidebar";
import SearchPage from "./Components/Search_page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <Rec />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <Header />
      <div className="app_page">
        <Sidebar className="sidebar" />
        <Rec className="rec" />
      </div> */}
    </div>
  );
}

export default App;
