import FoodCard from "./components/FoodItems/FoodCard";
import menuData from "./components/data/menuData";
import "./App.css"; 

const App = () => {
  return (
    <div className="all-container">
      <header className="title">
        <h1>Evangadi Menu</h1>
        <div></div>
      </header>

      <div className="foods-container">
        {menuData.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default App;
