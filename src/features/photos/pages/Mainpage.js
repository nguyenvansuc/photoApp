import React from 'react'
import { useSelector } from 'react-redux'

import Banner from '../../../components/Banner/Banner'
import PhotoList from '../components/PhotoList'
export default function MainPage() {
    const photos=useSelector(state=>state.photos)
    console.log('photos',photos)
    return (
        <div>
            <Banner title="Your Photos"/>
            <PhotoList photos={photos}/>
        </div>
    )
}
