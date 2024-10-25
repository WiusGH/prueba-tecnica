import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Items from "./pages/Items";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default App;
