/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import logo from './DemoSiteImages/wing_logo_01.png'
import NavBar from '../NavBar/NavBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import Box from '@material-ui/core/Box'


const NavContent = [
    /* 
    Each Object can take the following peramiters:  
    buttonText: String
    buttonlink: String
    buttonIcon: Array<Object>
    buttonColor: String
    buttonlink: String
    */
    { buttonText: 'Home', buttonlink: '/' },
    { buttonText: 'Animations', buttonlink: '/demosite' },
]

const NavImages = [
    /* 
    Each Object can take the following peramiters:  
    navImage: String
    */
    { navImage: logo },
]

const AnimationCardData = [
    /* 
    Each Object can take the following peramiters:  
    image: String
    title: String
    description: String
    href: String
    */
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/butterfly.png', title: 'Butterfly', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://youtu.be/R1_Z7zR6drM'},
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png', title: 'Parking Lot', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=PoLar73R4Zw'},
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowcar.png', title: 'Rainbow Road', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Fu2tjMiWqGU'},
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowman.png', title: 'Rainbow Man', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=TD0s8BGV2fQ&feature=youtu.be'},
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png', title: 'Strut Fur', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=ncLb4wvw9uY'},
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/wateralien.png', title: 'Fluid Alien', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Wo40N4g04QI'},

]




export default function DemoSite() {


    return (
        <Box>
            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box p={3}>
                <ProjectCard cardData={AnimationCardData} />

            </Box>
        </Box>

    );
}
