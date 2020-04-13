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
    { buttonText: 'My Projects', buttonlink: '/demosite' },
]

const NavImages = [
    /* 
    Each Object can take the following peramiters:  
    navImage: String
    */
    { navImage: logo },
]

const CardData = [
    /* 
    Each Object can take the following peramiters:  
    image: String
    title: String
    description: String
    href: String
    */
    { image: 'https://www.wallpaperbetter.com/wallpaper/429/1000/856/basket-of-puppies-1080P-wallpaper-middle-size.jpg', title: 'Hi', description: 'hello', href: '/'},
    { image: 'https://www.wallpaperbetter.com/wallpaper/429/1000/856/basket-of-puppies-1080P-wallpaper-middle-size.jpg'},
    { title: 'Hi', description: 'hello', href: '/'},
    


]

export default function DemoSite() {
    return (
        <Box>
            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box p={3}>
                <ProjectCard cardData={CardData} />
            </Box>
        </Box>

    );
}
