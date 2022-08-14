import React from 'react';
import PropType from 'prop-types';
import { Box, Typography } from '@mui/material';

const GettingStartedCards = ({ cardData }) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' m={3}>
            <Box display='flex' alignItems='center'>
                {cardData?.collateral}
            </Box>
            <Box display='flex' alignItems='center' m={3}>
                <Typography variant='h3' textAlign='center' color='text.primary'>
                    {cardData?.cardTitle}
                </Typography>
            </Box>
            <Box display='flex' alignItems='center'  m={3}>
                <Typography variant='body1' textAlign='center' color='text.primary'>
                    
                    {cardData?.cardContent}
                </Typography>
            </Box>
        </Box>
    )
}

GettingStartedCards.propTypes = {
    step: PropType.string
}

export default GettingStartedCards;