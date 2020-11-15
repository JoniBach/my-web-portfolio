import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import WebIcon from '@material-ui/icons/Web';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MovieIcon from '@material-ui/icons/Movie';
import PetsIcon from '@material-ui/icons/Pets';
export const pages = [
    { label: 'About', link: '/', icon: <InfoIcon /> },
    { label: 'Creative', link: '/creativeportfolio', icon: <CreateIcon /> },
    { label: 'Web', link: '/webportfolio', icon: <WebIcon /> },
    { label: 'Covid', link: '/mycovidtracker', icon: <DataUsageIcon /> },
]
export const links = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/james-crook-492652185/?originalSubdomain=uk', icon: <LinkedInIcon /> },
    { label: 'Instagram', link: 'https://www.instagram.com/infrageist/', icon: <InstagramIcon /> },
    // { label: 'CV', link: 'https://github.com/JoniBach', icon: <InsertDriveFileIcon /> },
    { label: 'GITHub', link: 'https://github.com/JoniBach', icon: <GitHubIcon /> },
    { label: 'Buy a Brew', link: 'https://jonibach.github.io/buy-a-brew/', icon: <LocalBarIcon /> },
    { label: 'Stellify Media', link: 'https://jonibach.github.io/stellify-media/', icon: <MovieIcon /> },
    { label: 'My Kitten Bestie', link: 'https://jonibach.github.io/gsap-tut-01/', icon: <PetsIcon /> },
]