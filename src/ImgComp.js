import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DomCard from './DomCard';
import { prettyDOM } from '@testing-library/react';

const ImgComp = (props) => {
    const [imgInfo, setImgInfo] = useState([]);

    const api_key = process.env.REACT_APP_API_KEY;
    console.log(api_key)

    const EffectFn = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
        .then((res) => {
            let info = res.data;
            console.log(info)
            setImgInfo(info)
        })
        .catch((error) => {
            return error;
        })
    }
    useEffect(EffectFn, [])
    
    return(
        <div>
            <DomCard imgInfo={imgInfo}/>
        </div>
    )
}

export default ImgComp;