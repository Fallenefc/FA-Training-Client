import React, { useEffect } from 'react';
import { Dog } from '../../Interfaces/Dog';

const DogList: React.FC<any> = (props) => {

  useEffect(() => {
    console.log(props.dogList)
  })
  
  return (
    <div>
      {props.dogList ? props.dogList.map((value: Dog, index: number) => {
        return <div key={index}>
          <div>{value.name}</div>
          <button>+</button>
          <div>{value.age}</div>
          <button>-</button>
          <div><img src={value.image}></img></div>
        </div>
      })
      : <div>Loading...</div>
    }
    </div>
  );
}

export default DogList;