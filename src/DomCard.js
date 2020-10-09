import React from 'react';
import styled from 'styled-components';

const HdImg = styled.img`
    width: 300px;
`;

const Container = styled.div`
    &.container {
        margin: 5%;
    }

    .explanation{
        padding: 5%
    }
`;

const Header = styled.header`
    background: pink;

    .title {
        margin: 0;
        padding: 2%; 
    }

    .date{
        margin: 0;
        padding: 2%;
    }
`;

const DomCard = ({imgInfo}) => {
    return (
        <div>
            <Header>
                <p className='date'>Picture of the Day for {imgInfo.date}</p>
                <h1 className='title'>{imgInfo.title}</h1>
            </Header>
            
            <Container className='container'>
                <HdImg src={imgInfo.hdurl} alt=""/>
                <p className='explanation'>{imgInfo.explanation}</p>
            </Container>
        </div>
        // <div>
        //     <Header>
        //         <p className='date'>Picture of the Day for 2020-10-09</p>
        //         <h1 className='title'>The Very Large Array at Moonset</h1>
        //     </Header>
            
        //     <Container className='container'>
        //         <HdImg src="https://apod.nasa.gov/apod/image/2010/VLA_Moonset_NIK_0991.jpg" alt=""/>
        //         <p className='explanation'>
        //         An inspirational sight, these giant dish antennas of the Karl G. Jansky Very Large Array (VLA) rise above the New Mexico desert at moonset.  Mounted on piers but transportable on railroad tracks to change the VLA’s configuration, its 27 operating antennas are each house-sized (25 meters across) and can be organized into an array spanning the size of a city (35 kilometers). A prolific radio astronomy workhorse, the VLA has been used to discover water on planet Mercury, radio-bright coronae around stars, micro-quasars in our Galaxy, gravitationally-induced Einstein rings around distant galaxies, and radio counterparts to cosmologically distant gamma-ray bursts. Its vast size has allowed astronomers to study the details of radio galaxies, super-fast cosmic jets, and map the center of our own Milky Way. Now 40 years since its dedication the VLA has been used in more than 14,000 observing projects and contributed to more than 500 Ph.D. dissertations. On October 10, the National Radio Astronomy Observatory will host a day-long online celebration of the VLA at 40 featuring virtual tours and presentations on the history, operations, science, and future of the Very Large Array.
        //         </p>
        //     </Container>
        // </div>
    )
}

export default DomCard;