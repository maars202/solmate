import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material'
import GettingStartedCards from './GettingStartedCards';
import { ReactComponent as GettingStartedStep1 } from '../../assets/gettingStartedAssets/GettingStartedStep1.svg'
import { ReactComponent as GettingStartedStep2 } from '../../assets/gettingStartedAssets/GettingStartedStep2.svg'
import { ReactComponent as GettingStartedStep3 } from '../../assets/gettingStartedAssets/GettingStartedStep3.svg'

const steps = [
    {
        collateral: <GettingStartedStep1 />,
        cardTitle: 'SolMate',
        cardContent: 'Bringing NFT Tickets to life.'
    },
    {
        collateral: <GettingStartedStep2 />,
        cardTitle: 'Get Ready',
        cardContent: 'SolMate is bringing NFTs to the physical space. We are reinventing how brand and club loyalty work, making it super easy for anyone to be part of special token-gated experiences.'
    },
    {
        collateral: <GettingStartedStep3 />,
        cardTitle: 'Get Excited',
        cardContent: 'Gear up for invitations to events catered to your liking, through the NFTs you own. As your commits to a certain brand, artist, or creator grow, so will your NFTs.'
    },
    // {
    //     collateral: <GettingStartedStep3 />,
    //     cardTitle: 'Get Excited 2',
    //     cardContent: 'Gear up for invitations to events catered to your liking, through the NFTs you own. As your commits to a certain brand, artist, or creator grow, so will your NFTs.'
    // },

]

const GettingStartedStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const navigate = useNavigate();

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleProceed = () => {
        navigate('/wallet')
    }

    const renderHorizontalStepper = () => {
        return (
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((stepData, index) => {
                    return (
                        <Step key={stepData.cardTitle}>
                            <StepLabel />
                        </Step>
                    );
                })}
            </Stepper>
        )
    }

    return (
        <Box>
            <GettingStartedCards cardData={steps[activeStep]} />
            {renderHorizontalStepper()}
            <Box display='flex' justifyContent='center' m={3}>
                <Button 
                    onClick={activeStep === steps.length - 1 ? handleProceed : handleNext}
                    variant='contained'
                    sx={{ width: '100%' }}>
                        {/* if its not the last page then it should be get started as button label: */}
                    {activeStep === steps.length - 1 ? 'Get Started' : 'Next'}
                </Button>
            </Box>
        </Box>
    )
}

export default GettingStartedStepper;