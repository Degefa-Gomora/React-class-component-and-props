import styles from "./FoodCard.module.css";

const FoodCard = ({ title, price, description, image }) => {
  return (
    <div className={styles.singleFood}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.titlePrice}>
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
      <div className={styles.foodDesc}>{description}</div>
    </div>
  );
};

export default FoodCard;
