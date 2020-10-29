import axios from 'axios';
import { Dog } from '../../Interfaces/Dog';

export const getDoggos = async (): Promise<any> => {
  try {
    const body = await axios.get('http://localhost:3000');
    const data = body.data;
    return data;
  }
  catch (e) {
    console.error(`Error trying to fetch data: ${e}`);
  }
}

export const postDoggo = async (dog: Dog): Promise<any> => {
  try {
    const res = await axios.post('http://localhost:3000/Doggos', dog);
    console.log(res);
  }
  catch (e) {
    console.error(`Error trying to add data: ${e}`);
  }
}

export const updateDoggo = async (id: string, type: string): Promise<any> => {
  try {
    await axios.put(`http://localhost:3000/Doggos/${id}/${type}`, {})
  }
  catch (e) {
    console.error(`Error trying to update data: ${e}`);
  }
}