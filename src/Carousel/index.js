import React from "react";
import styles from "./index.module.scss";

function Carousel({
  itemHeight,
  itemWidth,
  containerWidth,
  containerHeight,
  itemList = ["A", "B", "C"],
}) {
  return (
    <div className={styles.wrapper}>
      {itemList.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

export default Carousel;
