/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import { Typography, FormGroup } from '@material-ui/core';
import NavBar from '../NavBar/NavBar'
import ProjectCard from '../ProjectCard/ProjectCard'
import Box from '@material-ui/core/Box'
import { Data } from '../../config/creative.config'

export default function DemoSite() {
    return (
        <Box>
            <NavBar style="bar" label="Creative" />
            <Box px={3}>
                <FormGroup row>
                    {
                        Data.map((d, i) => (
                                <div>
                                    <Box pt={4} pb={1}>
                                        <Typography variant="h4" component="h2">{d.title}</Typography>
                                    </Box>
                                    <ProjectCard cardData={d.content} />
                                </div>
                            ))
                            }
                </FormGroup>
            </Box>
        </Box>

    );
}
