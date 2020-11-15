import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import CreateIcon from '@material-ui/icons/Create';
import WebIcon from '@material-ui/icons/Web';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
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
]