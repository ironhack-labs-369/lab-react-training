import React from 'react';
import styles from './CreditCard.module.css';

const CreditCard = (props) => {
  return (
    <div
      className={styles.CreditCard}
      style={{
        backgroundColor: props.bgColor,
        color: props.bgColor === '#eeeeee' ? '#000' : '#fff',
      }}
    >
      <h1>{props.type}</h1>
      <h1>{props.number}</h1>
      <div className={styles.span}>
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}
        </span>
        <span>{props.bank}</span>
      </div>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
