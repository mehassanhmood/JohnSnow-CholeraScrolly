// ScrollyTelling.jsx
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Box, Text, VStack, Container, HStack } from '@chakra-ui/react';

const steps = [
  "Step 1: Welcome to Scrolly Telling!",
  "Step 2: Scroll to see the magic!",
  "Step 3: This is how you create interactive stories!",
  "Step 4: Customize for your needs!"
];

const ScrollyTelling = () => {
  const [currentStep, setCurrentStep] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack alignItems="start" spacing={8}>
        {/* Sticky Sidebar Centered in Viewport */}
        <Box
          w="250px"
          position="sticky"
          top="50%" // Sidebar sticks in the middle of the viewport
          transform="translateY(-50%)" // Center the sidebar vertically
          p={4}
          bg="teal.500"
          color="white"
          borderRadius="md"
          boxShadow="md"
          zIndex="10"
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Sidebar
          </Text>
          <Text>
            Current Step: {currentStep !== null ? steps[currentStep] : "Scroll to see the steps"}
          </Text>
        </Box>

        {/* ScrollyTelling Content */}
        <VStack spacing={0} flex="1">
          <Scrollama onStepEnter={onStepEnter}>
            {steps.map((content, index) => (
              <Step data={index} key={index}>
                <Box 
                  w="100%" 
                  h="100vh"  // Make each step full screen height
                  p={6} 
                  bg={currentStep === index ? "teal.300" : "gray.300"} 
                  borderRadius="md" 
                  boxShadow="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="2xl" color="white" textAlign="center">
                    {content}
                  </Text>
                </Box>
              </Step>
            ))}
          </Scrollama>
        </VStack>
      </HStack>
    </Container>
  );
};

export default ScrollyTelling;


