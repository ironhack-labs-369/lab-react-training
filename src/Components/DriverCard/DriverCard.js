import React from 'react';
import styles from './DriverCard.module.css';

const DriverCard = (props) => {
  return (
    <div className={styles.DriverCard}>
      <img src={props.img} alt="img-driver" />
      <div className={styles.infos}>
        <h3>{props.name}</h3>
        <div>
          <big>{'★'.repeat(Math.floor(props.rating))}</big>
          <big>{'☆ '.repeat(5 - Math.floor(props.rating))}</big>
        </div>
        <span>
          {props.car.model} {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
