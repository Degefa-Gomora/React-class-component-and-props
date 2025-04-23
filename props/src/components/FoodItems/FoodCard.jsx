import React, { Component } from "react";
import styles from "./FoodCard.module.css";

class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleReadMore = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { title, category, price, desc, img, link, place, time } =
      this.props.data;
    const { isExpanded } = this.state;
    const shouldTruncate = desc.length > 100;
    const displayedText =
      isExpanded || !shouldTruncate ? desc : desc.substring(0, 100) + "...";

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

        <div className={styles.foodDesc}>
          {displayedText}
          {shouldTruncate && (
            <span
              onClick={this.toggleReadMore}
              style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            >
              {isExpanded ? "Show less" : "Read more"}
            </span>
          )}
        </div>
{/* conditional rendering */}
        {link && (
          <div className={styles.extraInfo}>
            <a href="#">{link}</a>
          </div>
        )}
        {/* {place && (
          <div className={styles.extraInfo}>
            <strong>Place:</strong> {place}
          </div>
        )}
        {time && (
          <div className={styles.extraInfo}>
            <strong>Time:</strong> {time}
          </div>
        )} */}
      </div>
    );
  }
}

export default FoodCard;








































































































// //! Class based react
// import React, { Component } from "react";
// import styles from "./FoodCard.module.css";

// class FoodCard extends Component {
//   render() {
//     const { title, category, price, desc, img, link,place,time } = this.props.data;
//     return (
//       <div className={styles.singleFood}>
//         <div className={styles.img}>
//           <img src={img} alt={title} />
//         </div>
//         <div className={styles.category}>{category}</div>
//         <div className={styles.titlePrice}>
//           <h3>{title}</h3>
//           <p>${price}</p>
//         </div>
//         <div className={styles.foodDesc}>{desc}</div>
//         {/*  Conditionally render if fields exist using && or short cercuit*/}
//         {link && (
//           <div className={styles.extraInfo}>
//             <a href="#">{link}</a>
//           </div>
//         )}
//         {/* ternary operator */}
//         {/* {link ? (
//           <div className={styles.extraInfo}>
//             <strong>Link:</strong> <a href="#">{link}</a>
//           </div>
//         ) : null} */}

//         {place && (
//           <div className={styles.extraInfo}>
//             <strong>Place:</strong> {place}
//           </div>
//         )}
//         {time && (
//           <div className={styles.extraInfo}>
//             <strong>Time:</strong> {time}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default FoodCard;

// // //class based that render if links exists
// // import React, { Component } from "react";
// // import styles from "./FoodCard.module.css";

// // class FoodCard extends Component {
// //   render() {
// //     const { title, category, price, desc, img, link } = this.props.data;

// //     return (
// //       <div className={styles.singleFood}>
// //         <div className={styles.img}>
// //           <img src={img} alt={title} />
// //         </div>
// //         <div className={styles.category}>{category}</div>
// //         <div className={styles.titlePrice}>
// //           <h3>{title}</h3>
// //           <p>${price}</p>
// //         </div>
// //         <div className={styles.foodDesc}>{desc}</div>

// //         {/* ✅ Conditionally render the link if it exists */}
// //         {link && (
// //           <div className={styles.link}>
// //             <a href="#">{link}</a>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   }
// // }

// // export default FoodCard;

// //!Functional based
// // import styles from "./FoodCard.module.css";
// // // Functional component that destructures props directly in the parameter list
// // const FoodCard = ({ title,category, price, desc, img }) => {
// //   return (
// //     <div className={styles.singleFood}>
// //       <div className={styles.img}>
// //         <img src={img} alt={title} />
// //       </div>
// //       <div className={styles.category}>{category}</div>
// //       <div className={styles.titlePrice}>
// //         <h3>{title}</h3>
// //         <p>${price}</p>
// //       </div>
// //       <div className={styles.foodDesc}>{desc}</div>
// //     </div>
// //   );
// // };

// // export default FoodCard;

// //example for single-food

//   /* <div class="single-food">
//   <div class="img">
//     <img src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-timatim-salata.jpg.webp" />
//   </div>
//   <div class="title-price">
//     <h3>TIMATIM SELAXA (ቲማቲም ሰላጣ)</h3>
//     <p>$5.99</p>
//   </div>
//   <div class="food-desc">
//     Timatim Salata refers to a type of fresh Ethiopian tomato salad that’s also
//     popular in Eritrea. It’s made with diced tomatoes, minced onions, and finely
//     chopped peppers dressed with a mixture of berbere spices, olive oil,
//     vinegar, and lemon juice.
//   </div>
// </div>; */
// // }

// //!Functional Component and class based – Without Destructuring in Parameters:

// // import styles from "./FoodCard.module.css";

// // const FoodCard = (props) => {
// //   const title = props.title;
// //   const price = props.price;
// //   const desc = props.desc;
// //   const img = props.img;
// //   const category = props.category;

// //   return (
// //     <div className={styles.singleFood}>
// //       <div className={styles.img}>
// //         <img src={img} alt={title} />
// //       </div>
// //       <div className={styles.category}>{category}</div>
// //       <div className={styles.titlePrice}>
// //         <h3>{title}</h3>
// //         <p>${price}</p>
// //       </div>
// //       <div className={styles.foodDesc}>{desc}</div>
// //     </div>
// //   );
// // };

// // export default FoodCard;

// //!Updated FoodCard Component (Class-Based)
// // import React, { Component } from "react";
// // import styles from "./FoodCard.module.css";

// // class FoodCard extends Component {
// //   render() {
// //     // Destructuring this.props to extract title, price, desc, img, category
// //     const { title, price, desc, img, category } = this.props;

// //     return (
// //       <div className={styles.singleFood}>
// //         <div className={styles.img}>
// //           <img src={img} alt={title} />
// //         </div>
// //         <div className={styles.titlePrice}>
// //           <h3>{title}</h3>
// //           <p>${price}</p>
// //         </div>
// //         <div className={styles.foodDesc}>{desc}</div>
// //         <div className={styles.category}>{category}</div>
// //       </div>
// //     );
// //   }
// // }

// // export default FoodCard;

// //!Class-Based Component – Without Destructuring:
// // import React, { Component } from "react";
// // import styles from "./FoodCard.module.css";

// // class FoodCard extends Component {
// //   render() {
// //     const title = this.props.title;
// //     const price = this.props.price;
// //     const desc = this.props.desc;
// //     const img = this.props.img;
// //     const category = this.props.category;

// //     return (
// //       <div className={styles.singleFood}>
// //         <div className={styles.img}>
// //           <img src={img} alt={title} />
// //         </div>
// //         <div className={styles.category}>{category}</div>
// //         <div className={styles.titlePrice}>
// //           <h3>{title}</h3>
// //           <p>${price}</p>
// //         </div>
// //         <div className={styles.foodDesc}>{desc}</div>
// //       </div>
// //     );
// //   }
// // }

// // export default FoodCard;
