//!class based
import React, { Component } from "react";
import FoodCard from "./components/FoodItems/FoodCard";
import menuData from "./components/data/menuData";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="all-container">
        <header className="title">
          <h1>Evangadi Menu</h1>
          <div></div>
        </header>

        <div className="foods-container">
          {menuData.map((item) => (
            <FoodCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

































































































//!Functional based
//  import FoodCard from "./components/FoodItems/FoodCard";
// import menuData from "./components/data/menuData";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="all-container">
//       <header className="title">
//         <h1>Evangadi Menu</h1>
//         <div></div>
//       </header>

//       <div className="foods-container">
//         {menuData.map((item) => (
//           console.log(item),
//           <FoodCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

//?on first loops the item takes
// item  {
//     id: 1,
//     title: "TIMATIM SELAXA (ቲማቲም ሰላጣ)",
//     category: "dinner",
//     price: 5.99,
//     img: "https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp",
//     desc: `Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely chopped peppers dressed with a mixture of berbere spices, olive oil, vinegar, and lemon juice.`,
//   }

// and make like  {/* <FoodCard
//           title={menuData[0].title}
//           price={menuData[0].price}
//           img={menuData[0].img}
//           category={menuData[0].category}
//           desc={menuData[0].desc}
//         /> */}

//!key={item.id}
//?Track elements efficiently
// React compares the "old virtual DOM" to the "new virtual DOM" during re-renders. Keys help it identify which items changed, were added, or removed. Without a unique key, React may re-render unnecessarily or even mix up components.

// Notes for other option

// Manual Prop Passing
// {
//   menuData.map((item) => (
//     <FoodCard
//       key={item.id}
//       title={item.title}
//       price={item.price}
//       desc={item.desc}
//       img={item.img}
//       category={item.category}
//     />
//   ));
// }

// import React from 'react';
// import FoodCard from './components/FoodCard';
// import menuData from './components/data/menuData';

// const App = () => {
//   return (
//     <div className="all-container">
//       <header className="title">
//         <h1>Evangadi Menu</h1>
//       </header>

//       <div className="foods-container">
//         {menuData.map(item => (
//           <FoodCard
//             key={item.id}
//             title={item.name}
//             price={item.price}
//             desc={item.description}
//             img={item.img}
//             category={item.category}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// Pass Entire Object as a Single Prop

// {menuData.map((item) => (
//   <FoodCard key={item.id} item={item} />
// ))}
// And in FoodCard.js:

// const FoodCard = ({ item }) => {
//   const { title, price, desc, img, category } = item;
//   return (
//     <div className={styles.singleFood}>
//       <div className={styles.img}><img src={img} alt={title} /></div>
//       <div className={styles.category}>{category}</div>
//       <div className={styles.titlePrice}><h3>{title}</h3><p>${price}</p></div>
//       <div className={styles.foodDesc}>{desc}</div>
//     </div>
//   );
// };
