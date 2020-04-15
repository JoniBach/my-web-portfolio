/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import logo from './DemoSiteImages/wing_logo_01.png'
import NavBar from '../NavBar/NavBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import Box from '@material-ui/core/Box'
import { Typography, Card, Button, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import Icon from '@material-ui/icons/Face'

const NavContent = [
    /* 
    Each Object can take the following peramiters:  
    buttonText: String
    buttonlink: String
    buttonIcon: Array<Object>
    buttonColor: String
    buttonlink: String
    */
    { buttonText: 'Home', buttonlink: '/home' },
    { buttonText: 'My Work', buttonlink: '/' },

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
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/butterfly.png', title: 'Butterfly', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://youtu.be/R1_Z7zR6drM' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/parkinglot.png', title: 'Parking Lot', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=PoLar73R4Zw' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowcar.png', title: 'Rainbow Rd', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Fu2tjMiWqGU' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/rainbowman.png', title: 'Rainbow Man', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=TD0s8BGV2fQ&feature=youtu.be' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/strut.png', title: 'Strut Fur', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=ncLb4wvw9uY' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/wateralien.png', title: 'Fluid Alien', description: 'An animation made using Cinema4D, Adobe Mixamo, AdobeFuse, Adobe AfterEffects', href: 'https://www.youtube.com/watch?v=Wo40N4g04QI' },
]

const GradshowData = [
    /* 
    Each Object can take the following peramiters:  
    image: String
    title: String
    description: String
    href: String
    */
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/trumpbot.png', title: 'Trump Bot', description: 'A simulacrum of Donald Trump driven by a TensorFlow Neural Network, animated in Maya, rendered with Arnold', href: 'https://vimeo.com/317655498' },

]

const PhotographyCardData = [
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Two+Foxes+Complete+Sides.jpg', title: 'Two Foxes', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Two+Foxes+Complete+Sides.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Three+Spikes+Final.jpg', title: 'Three Spikes', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Three+Spikes+Final.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hotel+Building.jpg', title: 'Hotel Casino', description: 'A rendering of a building concept made to learn modeling in Cinema4D', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hotel+Building.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/01+Canada+IG.jpg', title: '1 Canada Sq', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/01+Canada+IG.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/25+Canada+IG.jpg', title: '25 Canada Sq', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/25+Canada+IG.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/BT+Tower.jpg', title: 'BT Tower', description: 'An architectural rendering made using Cinema4D for the purpose of studying 3D reflections', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/BT+Tower.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hearing_Ear.jpg', title: 'Sine Ear', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Hearing_Ear.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Sight_Eye.jpg', title: 'Sine Eye', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Sight_Eye.jpg' },
    { image: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Touch_finger.jpg', title: 'Sine Finger', description: 'A rendering of the human anatomy represented by data made with ProcessingPY, lazer cutter, darkroom exposures', href: 'https://jamescrookdev.s3.eu-west-2.amazonaws.com/images/Touch_finger.jpg' },
]


export default function DemoSite() {
    const handleShowGrad = (event) => {
        setShowGrad(event.target.checked);
    };
    const [showGrad, setShowGrad] = React.useState(true);

    const handleShowAnimations = (event) => {
        setShowAnimations(event.target.checked);
    };
    const [showAnimations, setShowAnimations] = React.useState(true);

    const handleShowAPhotos = (event) => {
        setShowPhotos(event.target.checked);
    };
    const [showPhotos, setShowPhotos] = React.useState(true);



    return (
        <Box>
            <NavBar navContent={NavContent} navImages={NavImages} />
            <Box px={3}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showGrad}
                                onChange={handleShowGrad}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />}
                        label="Gradshow Project"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showAnimations}
                                onChange={handleShowAnimations}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />}
                        label="Animations"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={showPhotos}
                                onChange={handleShowAPhotos}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />}
                        label="Photography"
                    />
                </FormGroup></Box>




            <Box px={3}>
                <FormGroup row>

                    {showGrad ?
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Grad Show</Typography>
                            </Box>
                            <ProjectCard cardData={GradshowData} />
                        </div>
                        : null}
                    {showAnimations ?
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Animation</Typography>
                            </Box>
                            <ProjectCard cardData={AnimationCardData} />
                        </div>
                        : null}
                    {showPhotos ?
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Photography</Typography>
                            </Box>
                            <ProjectCard cardData={PhotographyCardData} />
                        </div>
                        : null}
                </ FormGroup>

            </Box>
        </Box>

    );
}
