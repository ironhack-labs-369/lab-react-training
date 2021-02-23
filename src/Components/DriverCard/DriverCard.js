import React from 'react';
import styles from './DriverCard.module.css';

const DriverCard = (props) => {
  return (
    <div className={styles.DriverCard}>
      <img src={props.img} alt="img-driver" />
      <div className={styles.infos}>
        <h3>{props.name}</h3>
        <span>
          {props.car.model} {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
