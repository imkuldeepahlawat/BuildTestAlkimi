import React from "react";
import styles from "./Slider.module.css";
type Sliderprototype = {
  text: string
}
const Slider = ( {text} : Sliderprototype) => {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.marquee}>
        <p
          className={`${styles.sliderText} text-2xl font-bold uppercase duration-500 bg-gradient-to-r from-blue-500`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Slider;
