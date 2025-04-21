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