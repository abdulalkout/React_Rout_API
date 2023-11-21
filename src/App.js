import "./App.css";
import { Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather";
import Nav from "./components/Nav";
import Cats from "./pages/Cats";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </div>
  );
}

export default App;
