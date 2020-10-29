import React, { useEffect } from 'react';
import { Dog } from '../../Interfaces/Dog';

const DogList: React.FC<any> = (props) => {

  const handleClick = (id: any, upOrDown: string, index: number) => {
    props.handleUpdateDog(id, upOrDown, index)
  }
  
  return (
    <div>
      {props.dogList ? props.dogList.map((value: Dog, index: number) => {
        return <div key={index}>
          <div>{value.name}</div>
          <button onClick={() => handleClick(value._id, 'Up', index)}>+</button>
          <div>{value.age}</div>
          <button onClick={() => handleClick(value._id, 'Down', index)}>-</button>
          <div><img src={value.image}></img></div>
        </div>
      })
      : <div>Loading...</div>
    }
    </div>
  );
}

export default DogList;