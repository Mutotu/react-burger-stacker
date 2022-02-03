import { useState } from "react";
import "./App.css";

function App() {
  const startData = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ];
  const [ingrediends, setIngredients] = useState(startData);
  const [arr, setArr] = useState([]);
  const addToArr = (item) => {
    setArr([item, ...arr]);
  };
  const [item, setItem] = useState("");
  return (
    <div className='App'>
      <h1>Burger Stack</h1>
      <div className='boxes'>
        <div className='ingredient-list'>
          <h1>My Ingredients</h1>
          {ingrediends.map((item, i) => {
            return (
              <p
                style={{ backgroundColor: item.color }}
                key={i}
                onClick={() => {
                  addToArr(item);
                }}
              >
                {item.name}
              </p>
            );
          })}
          <input
            type='text'
            value={item}
            placeholder='Add a new item'
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          {/* <button onClick={() => addToArr({ name: item, color: "red" })}>
            Add
          </button> */}
          <button
            onClick={() => {
              setIngredients([...ingrediends, { name: item, color: "red" }]);
            }}
          >
            Add
          </button>

          <h2>Ingredient 1</h2>
        </div>
        <div className='stack-container'>
          <h1>My Stack</h1>
          {arr.map((item, i) => {
            return (
              <p key={i} style={{ backgroundColor: item.color }}>
                {item.name}
              </p>
            );
          })}
          <button onClick={() => setArr([])}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
