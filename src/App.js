import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './Components/Login-SignupPage/Login';
import HomePage from './Components/HomePage/Home';
import RestaurantPage from './Components/RestaurantPage/Restaurant';
import DishPage from './Components/DishPage/Dish';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Restaurant" element={<RestaurantPage />} />
        <Route path="/Dish" element={<DishPage />} />
      </Routes>
    </div>
  );
}

export default App;
