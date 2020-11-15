/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { Typography, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import logo from './DemoSiteImages/wing_logo_01.png'
import NavBar from '../NavBar/NavBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import Box from '@material-ui/core/Box'
import {AnimationCardData, GradshowData, PhotographyCardData, WebDesignCardData } from '../../config/creative.config'

export default function DemoSite() {
    const [showGrad, setShowGrad] = React.useState(true);
    const handleShowGrad = (event) => {
        setShowGrad(event.target.checked);
    };
    const [showAnimations, setShowAnimations] = React.useState(true);
    const handleShowAnimations = (event) => {
        setShowAnimations(event.target.checked);
    };
    const [showPhotos, setShowPhotos] = React.useState(true);
    const handleShowAPhotos = (event) => {
        setShowPhotos(event.target.checked);
    };
    const [showWebDesign, setShowWebDesign] = React.useState(true);
    const handleShowWebDesign = (event) => {
        setShowWebDesign(event.target.checked);
    };



    return (
        <Box>
            <NavBar style="bar" label="Creative"/>
            <Box px={3}>
                <FormGroup row>
                <FormControlLabel
                      control={(
                            <Checkbox
                                color="primary"
                                checked={showWebDesign}
                                onChange={handleShowWebDesign}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        )}
                        label="Web Design"
                    />
                    <FormControlLabel
                      control={(
                            <Checkbox
                                color="primary"
                                checked={showGrad}
                                onChange={handleShowGrad}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        )}
                        label="Gradshow Project"
                    />
                    <FormControlLabel
                      control={(
                            <Checkbox
                                color="primary"
                                checked={showAnimations}
                                onChange={handleShowAnimations}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          )}
                        label="Animations"
                    />
                    <FormControlLabel
                      control={(
                            <Checkbox
                                color="primary"
                                checked={showPhotos}
                                onChange={handleShowAPhotos}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          )}
                        label="Photography"
                    />
                </FormGroup>
            </Box>

            <Box px={3}>
                <FormGroup row>
                {showWebDesign ? (
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Web Design</Typography>
                            </Box>
                            <ProjectCard cardData={WebDesignCardData} />
                        </div>
                    )
                        : null}
                    {showGrad ? (
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Grad Show</Typography>
                            </Box>
                            <ProjectCard cardData={GradshowData} />
                        </div>
                    )
                        : null}
                    {showAnimations ? (
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Animation</Typography>
                            </Box>
                            <ProjectCard cardData={AnimationCardData} />
                        </div>
                    )
                        : null}
                    {showPhotos ? (
                        <div>
                            <Box pt={4} pb={1}>
                                <Typography variant="h4" component="h2">Photography</Typography>
                            </Box>
                            <ProjectCard cardData={PhotographyCardData} />
                        </div>
                    )
                        : null}
                </FormGroup>

            </Box>
        </Box>

    );
}
