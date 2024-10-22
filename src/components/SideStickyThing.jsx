import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem, Heading, Image } from "@chakra-ui/react";


import MapComponent from './MapComponent';
import { stepsContent } from '../../public/stepsContent';
import JohnSnow from "/John_Snow.jpg"





const SideStickyThing = () => {

  const [activeStep, setActiveStep] = useState(0);
  

  const totalDeaths = 10; // Total deaths for the specific clue
  const deathsInCircle = 10;
  const cambridgeStreetCoords = [51.505, -0.1];  // For demonstration purposes, we assume 10 deaths in the circle
  const goldenSquareCoords = [51.510, -0.080]; 
  const carnabyStreetCoords = [51.5121, -0.1383]; // Replace with actual coordinates for Carnaby Street
  const carnabyStreetRadius = 7;
  const workhouseCoords = [51.5110, -0.1260]; // Replace with actual coordinates for the workhouse
  const workhouseRadius = 10;

  useEffect(() => {
    const steps = document.querySelectorAll(".step");
    const scroller = scrollama();

    const handleStep = (response) => {
      const el = response.element;
      steps.forEach(step => step.style.backgroundColor = "");
      el.style.backgroundColor = "orange";
      setActiveStep(el.dataset.step);

    };

    scroller.setup({
      step: "#scrolly .step",
      offset: 0.4,
      debug: false,
    }).onStepEnter(handleStep);

    return () => {
      scroller.destroy();
    };
  }, []);


return (
  <Box alignItems={"center"} justifyContent={"center"} backgroundColor={"black"}>
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"6"} padding={"6"} zIndex={10}>
      <Text fontSize={24} zIndex={10}> John Snow, Epidemiology & Data Analytics </Text>
    </Box>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      <GridItem top={"0.0vh"} colSpan={1} bg={"black"} className="sticky-thing" position={"sticky"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} height={"75vh"} zIndex={10} h={{ base: "40vh", md: "65vh" }}>
      {activeStep === '1' ? (
            <Image src={JohnSnow}  width={'100%'} height={'100%'} objectFit='' alt="John Snow" />
          ) : activeStep === '4' ? (
            <MapComponent 
              // key={activeStep}
              showPopup={activeStep === '2' || activeStep === '3'} 
              deathsInCircle={deathsInCircle} 
              totalDeaths={totalDeaths}
              zoom={22}  
            />
          ) : activeStep === '5' ? (
            <MapComponent 
              key={activeStep}
              showPopup={activeStep === '2' || activeStep === '3'} 
              deathsInCircle={deathsInCircle} 
              totalDeaths={totalDeaths} 
              cambridgeStreetCoords={cambridgeStreetCoords}
              zoom={15} 
            />
          ) : activeStep === '6' ? (
            <MapComponent 
            key={activeStep}
            showPopup={activeStep === '2' || activeStep === '3'} 
            deathsInCircle={deathsInCircle} 
            totalDeaths={totalDeaths} 
            carnabyStreetCoords = {carnabyStreetCoords} 
            cambridgeStreetCoords={cambridgeStreetCoords}
            // goldenSquareCoords={goldenSquareCoords}
            // showGoldenSquarePopup={activeStep === '6'}
            zoom={13}
          />
          ) : activeStep === '7' ? (
            <MapComponent 
            key={activeStep}
            showPopup={activeStep === '2' || activeStep === '3'} 
            deathsInCircle={deathsInCircle} 
            totalDeaths={totalDeaths} 
            carnabyStreetCoords = {carnabyStreetCoords} 
            cambridgeStreetCoords={cambridgeStreetCoords}
            goldenSquareCoords={goldenSquareCoords}
            showGoldenSquarePopup={activeStep === '7'}
            zoom={13}
          />
          ) : activeStep === '8' ? (
            <MapComponent 
            // key={activeStep}
            showPopup={activeStep === '2' || activeStep === '3'} 
            deathsInCircle={deathsInCircle} 
            totalDeaths={totalDeaths} 
            carnabyStreetCoords = {carnabyStreetCoords} 
            cambridgeStreetCoords={cambridgeStreetCoords}
            goldenSquareCoords={goldenSquareCoords}
            showGoldenSquarePopup={activeStep > '7'}
            workhouseCoords = {workhouseCoords}
            workhouseRadius = {workhouseRadius}
            zoom={13}
          />
          ) :
           (
            <MapComponent key={activeStep}
             showPopup={activeStep === '2' || activeStep === '3'} zoom={13}/>
          )}
      </GridItem>

      <GridItem colSpan={1} bg={"black"} id="scrolly" zIndex={0}>
        {stepsContent.map((step) => (
          <Box key={step.step} position={"relative"} height={"50vh"} className="step" data-step={step.step} margin={"6"} padding={"6"} backgroundColor={"gray.400"} boxShadow={"2xl"} zIndex={0}>
            <Heading>{step.title}</Heading>
            <Text color={"gray.900"}>{step.text}</Text>
          </Box>
        ))}
        <Box id="outro" marginTop={"24"}>
          <div></div>
        </Box>
      </GridItem>
    </Grid>
  </Box>
);
};


export default SideStickyThing;





