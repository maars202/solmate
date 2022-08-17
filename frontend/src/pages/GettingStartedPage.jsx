import React from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material'
import GettingStartedStepper from '../components/GettingStarted/GettingStartedStepper';

const GettingStartedPage = () => {
    const navigate = useNavigate();

    const handleSkip = () => {
        navigate('/wallet')
    }
    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'>
            <Box display='flex' justifyContent='flex-end' m={3}>
                <Button variant='text' onClick={handleSkip}>
                    <Typography color='text.primary'>Skip</Typography>
                </Button>
            </Box>
            <Box>
                <GettingStartedStepper />
            </Box>
        </Box>
    )
}

export default GettingStartedPage;


