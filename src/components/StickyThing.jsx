import React, { useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";


const StickyThing = () => {
  useEffect(() => {
    // Get references to elements
    let steps = document.querySelectorAll(".step");

    // Initialize scrollama
    let scroller = scrollama();

    // Handle the step enter event
    let handleStepEnter = (response) => {
      let el = response.element;

      // Remove active class from all steps and add it to the current step
      steps.forEach(step => step.classList.remove('is-active'));
      el.classList.add('is-active');

      // Update the sticky thing text
      document.getElementById('sticky-thing-text').innerText = el.dataset.step;
    };

    scroller
      .setup({
        step: "#scrolly  .step",
        offset: 0.5,
        debug: false,
      })
      .onStepEnter(handleStepEnter);

    return () => {
      scroller.destroy();
    };
  }, []);

  return (
    <section id="scrolly">
      {/* Sticky Box for the '0' */}
      <Box
        id='sticky-thing'
        position="fixed"
        left="0"
        w="100%"
        m="0"
        zIndex="0" // Set zIndex to 0
        top="24.5vh"
        h="75vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text id='sticky-thing-text' fontSize="70px" zIndex="0">0</Text>
      </Box>

      {/* Article that scrolls */}
      <Box
        backgroundColor="black"
        zIndex="1" // Ensure this has a higher zIndex than the sticky box
        position="relative" // Fixed typo from 'realtive' to 'relative'
        boxShadow="dark-lg"
        padding="220px"
        display="flex"
        margin="12"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Nothing</Text>
      </Box>


        {/* Ensure scrolling content has a higher z-index */}
        <Box className="step" data-step="1" margin="24" marginTop="500px" marginBottom="100" color="white" backgroundColor="black" padding="24" zIndex="1" position="relative">
          <Text padding="4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>

        <Box className="step" data-step="2" position="relative" margin="24" color="white" backgroundColor="black" padding="24" zIndex="1" marginTop="0">
          <Text padding="4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>

        <Box className="step" data-step="3" margin="24" color="white" backgroundColor="black" padding="24" zIndex="1" position="relative">
          <Text padding="4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>

        <Box marginBlockEnd="400px" className="step" data-step="4" margin="24" color="white" backgroundColor="black" padding="24" zIndex="1" position="relative">
          <Text padding="4px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </Box>
      

      <Box position="relative" backgroundColor="gray.900" boxShadow="dark-lg" display="grid" justifyContent="center" alignItems="center" margin="200px" zIndex="1">
        <Text padding="24">nothing</Text>
      </Box>
    </section>
  );
};

export default StickyThing;
