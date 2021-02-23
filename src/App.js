import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard/IdCard';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';
import BoxColor from './Components/BoxColor/BoxColor';
import CreditCard from './Components/CreditCard/CreditCard';
import Rating from './Components/Rating/Rating';
import DriverCard from './Components/DriverCard/DriverCard';
import LikeButton from './Components/LikeButton/LikeButton';
import ClickablePicture from './Components/ClickablePicture/ClickablePicture';
import Dice from './Components/Dice/Dice';

function App() {
  const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    height: '1.78m',
    birth: '1988-05-11',
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  };
  const user2 = {
    firstName: 'Obrien',
    lastName: 'Delores',
    gender: 'female',
    height: '1.72m',
    birth: '1993-05-11',
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  };

  return (
    <div className="App">
      <IdCard data={user1} />
      <IdCard data={user2} />
      <Greetings lang="it">Marco</Greetings>
      <Greetings lang="de">Felix</Greetings>
      <Random min={6} max={432} />
      <Random min={9} max={99} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Dice
        empty="../public/img/dice-empty.png"
        one="../public/img/dice1.png"
        two="../public/img/dice2.png"
        three="../public/img/dice3.png"
        four="../public/img/dice4.png"
        five="../public/img/dice5.png"
        six="../public/img/dice6.png"
      />
    </div>
  );
}

export default App;
