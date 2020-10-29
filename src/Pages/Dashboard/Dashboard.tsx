import React, { useEffect } from 'react';
import DogList from '../../Components/DogList/DogList';
import Input from '../../Components/Input/Input';
import { Dog } from '../../Interfaces/Dog';

interface Props {
  doglist: Dog | null,
  handleAddDog: any
}

const Dashboard: React.FC<Props> = (props) => {

  return (
    <div className='dashboard-container'>
      <Input handleAddDog={props.handleAddDog}/>
      <DogList dogList={props.doglist}/>
    </div>
  );
}

export default Dashboard;