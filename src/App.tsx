import React, { useEffect, useState } from 'react';
import './App.css';
import DogList from './Components/DogList/DogList';
import { Dog } from './Interfaces/Dog';
import Dashboard from './Pages/Dashboard/Dashboard'
import {getDoggos, postDoggo, updateDoggo} from './Services/ApiService/ApiService'

const App = () => {

  const [dogList, setDogList] = useState<any>(null)

  useEffect(() => {
    const dogs = getDoggos().then((data) => setDogList(data));
  }, [])

  const handleAddDog = async (dogInfo: Dog) => {
    const newDoggo = await postDoggo(dogInfo);
    let updatedDogsArray = [...dogList, newDoggo]
    setDogList(updatedDogsArray)
  }

  const handleUpdateDog = async (id: string, type: string, index: number) => {
    await updateDoggo(id, type);
    let updatedDogsArray = [...dogList];
    type === 'Up' ? updatedDogsArray[index].age++ : updatedDogsArray[index].age--;
    setDogList(updatedDogsArray);
  }

  return (
    <div className="App">
      <Dashboard doglist={dogList} handleAddDog={handleAddDog} handleUpdateDog={handleUpdateDog}>
      </Dashboard>
    </div>
  );
}

export default App;
