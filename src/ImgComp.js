import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DomCard from './DomCard';

const ImgComp = (props) => {
    const [imgInfo, setImgInfo] = useState([]);

    const EffectFn = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=e1zaMAnt64LlG5bvfvcwcwtAhaGr0b8RYlufz9fB')
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