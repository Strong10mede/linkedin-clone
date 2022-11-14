import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/">
            <Login />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
