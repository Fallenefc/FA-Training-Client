import React, { useEffect, useState } from 'react';
import './App.css';
import DogList from './Components/DogList/DogList';
import { Dog } from './Interfaces/Dog';
import Dashboard from './Pages/Dashboard/Dashboard'
import {getDoggos, postDoggo} from './Services/ApiService/ApiService'

const App = () => {

  const [dogList, setDogList] = useState<any>(null)

  useEffect(() => {
    const dogs = getDoggos().then((data) => setDogList(data));
  }, [])

  const handleAddDog = async (dogInfo: Dog) => {
    await postDoggo(dogInfo);
    let updatedDogsArray = [...dogList, dogInfo]
    setDogList(updatedDogsArray)
  }

  return (
    <div className="App">
      <Dashboard doglist={dogList} handleAddDog={handleAddDog}>
      </Dashboard>
    </div>
  );
}

export default App;
