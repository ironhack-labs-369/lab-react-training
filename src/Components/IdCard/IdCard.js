import React from 'react';
import styles from './IdCard.module.css';

const IdCard = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.data.picture} alt="user-pic" />
      <div>
        <h3>First name: {props.data.firstName}</h3>
        <h3>Last name: {props.data.lastName}</h3>
        <h3>Gender: {props.data.gender}</h3>
        <h3>Height {props.data.height}</h3>
        <h3>Birth: {props.data.birth}</h3>
      </div>
    </div>
  );
};

export default IdCard;
