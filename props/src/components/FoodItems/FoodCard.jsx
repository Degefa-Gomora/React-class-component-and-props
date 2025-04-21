import styles from "./FoodCard.module.css";
// Functional component that destructures props directly in the parameter list
const FoodCard = ({ title, price, desc, img, category }) => {
  return (
    <div className={styles.singleFood}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.category}>{category}</div>
      <div className={styles.titlePrice}>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      <div className={styles.foodDesc}>{desc}</div>
    </div>
  );
};

export default FoodCard;
































//!Updated FoodCard Component (Class-Based)
// import React, { Component } from "react";
// import styles from "./FoodCard.module.css";

// class FoodCard extends Component {
//   render() {
//     // Destructuring this.props to extract title, price, desc, img, category
//     const { title, price, desc, img, category } = this.props;

//     return (
//       <div className={styles.singleFood}>
//         <div className={styles.img}>
//           <img src={img} alt={title} />
//         </div>
//         <div className={styles.titlePrice}>
//           <h3>{title}</h3>
//           <p>${price}</p>
//         </div>
//         <div className={styles.foodDesc}>{desc}</div>
//         <div className={styles.category}>{category}</div>
//       </div>
//     );
//   }
// }

// export default FoodCard;

