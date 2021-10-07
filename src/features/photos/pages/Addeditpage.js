import React from 'react';

import Banner from '../../../components/Banner/Banner';
import PhotoForm from '../components/PhotoForm';
import { useDispatch } from 'react-redux';
import {addPhoto} from '../photoSlice'

export default function Addeditpage() {
  const dispatch = useDispatch()
  const getValue=value => {
    
      value.id = Math.floor(Math.random() * 100000);
    
    console.log(value,'value');
    const action = addPhoto(value);
    console.log(action,'action');
    dispatch(action)
  }
  return (
    <div>
      <Banner
        title="Add new Photo"
        background="https://images.wallpaperscraft.com/image/single/girl_laptop_work_222398_2560x1024.jpg"
      />
      <PhotoForm getValue={getValue}/>
    </div>
  );
}
