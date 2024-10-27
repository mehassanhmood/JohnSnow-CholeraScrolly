import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { Box, Text, Grid, GridItem, Heading, Image  } from "@chakra-ui/react";
import "./SideStickyThing.css"

import { stepsContent } from '../../public/stepsContent';
import JohnSnow from "/John_Snow.jpg"
import totalDeaths from "../../public/totalDeaths";
import pump from "../../public/pump.jpg"

import MapComponent from './MapComponent'



const SideStickyThing = () => {

  const [activeStep, setActiveStep] = useState(0);
  
  

   
  
  const broadStCoords = [51.513341,-0.136668];  
  const crownChapelCoords = [51.513876,-0.139586]; 
  const gtMarlboroughCoords = [51.514906,-0.139671];
  const deanStreetCoords = [51.512354,-0.13163];
  const soSohoCoords = [51.512139,-0.133594];
  const briddleStCoords = [51.511542,-0.135919];
  const coventryStCoords = [51.510019,-0.133962];
  const warWickStCoords = [51.511295,-0.138199];



  useEffect(() => {
    const steps = document.querySelectorAll(".step");
    const scroller = scrollama();

    const handleStep = (response) => {
      const el = response.element;
      steps.forEach((step) => step.classList.remove("active"));
      el.classList.add("active");
      setActiveStep(el.dataset.step);
      

    };

    scroller.setup({
      step: "#scrolly .step",
      offset: 0.6,
      debug: false,
    }).onStepEnter(handleStep);

    return () => {
      scroller.destroy();
    };
  }, []);


return (
  <Box alignItems={"center"} justifyContent={"center"} backgroundColor={"black"}>
    <Box
     display={"flex"} alignItems={"center"} justifyContent={"center"} margin={"6"} padding={"6"} zIndex={10}>
      <Heading 
          backgroundColor={"gray.900"}
          textColor={"orange"}
          borderRadius={"3xl"}
          borderWidth={"thick"}
          borderColor={"orange"}
          p={6}
      zIndex={10}> John Snow, Epidemiology & Data Analytics </Heading>
    </Box>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      <GridItem top={"3.0vh"} ml={4} colSpan={1} bg={"black"} className="sticky-thing" position={"sticky"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={"100%"} zIndex={10} h={{ base: "40vh", md: "65vh" }} mt={6}>
          {activeStep === '1' || activeStep == "0" ? (
            <Image 
            className='image'
            src={JohnSnow}  width={'100%'} height={'100%'} fit='contain' alt="John Snow" />
          ) : activeStep === '2' ? (
            <MapComponent 
              key={activeStep}
              soSohoCoords={soSohoCoords}
              totalDeaths = {totalDeaths}
              zoom={22}  
            />
          ) : activeStep === '3' ? (
            <MapComponent 
              key={activeStep}
              broadStCoords={broadStCoords}
              soSohoCoords={soSohoCoords}
              totalDeaths = {totalDeaths}
              zoom={16} 
            />
          ) : activeStep === '4' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords}
            totalDeaths = {totalDeaths} 
            zoom={16}
          />
          ) : activeStep === '5' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords} 
            gtMarlboroughCoords = {gtMarlboroughCoords}
            totalDeaths = {totalDeaths}
            zoom={16}
          />
          ) : activeStep === '6' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords} 
            gtMarlboroughCoords = {gtMarlboroughCoords}
            deanStreetCoords = {deanStreetCoords}
            totalDeaths = {totalDeaths}
            zoom={16}
          />
          ) : activeStep === '7' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords} 
            gtMarlboroughCoords = {gtMarlboroughCoords}
            deanStreetCoords = {deanStreetCoords}
            briddleStCoords = {briddleStCoords}
            totalDeaths = {totalDeaths}
            zoom={16}
          />
          ) : activeStep === '8' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords} 
            gtMarlboroughCoords = {gtMarlboroughCoords}
            deanStreetCoords = {deanStreetCoords}
            briddleStCoords = {briddleStCoords}
            coventryStCoords = {coventryStCoords}
            totalDeaths = {totalDeaths}
            zoom={16}
          />
          ) : activeStep === '9' ? (
            <MapComponent 
            key={activeStep}
            broadStCoords={broadStCoords}
            soSohoCoords={soSohoCoords}
            crownChapelCoords = {crownChapelCoords} 
            gtMarlboroughCoords = {gtMarlboroughCoords}
            deanStreetCoords = {deanStreetCoords}
            briddleStCoords = {briddleStCoords}
            coventryStCoords = {coventryStCoords}
            warWickStCoords = {warWickStCoords}
            totalDeaths = {totalDeaths}
            zoom={16}
          />
          ) :
           (<Image 
            className='pump'
            src={pump}  width={'100%'} height={'100%'} fit='contain' alt="Broad Street Pump" />
          )}
      </GridItem>

      <GridItem colSpan={1} bg={"black"} id="scrolly" zIndex={0}>
        {stepsContent.map((step) => (
          <Box 
          justifyContent={"center"}
          alignItems={"center"}
          key={step.step} position={"relative"} height={"50vh"} className="step" data-step={step.step} mx={"6"} padding={"5"} backgroundColor={"gray.400"} boxShadow={"2xl"} zIndex={0}>
            <Heading
            textAlign={"center"}
            >{step.title}</Heading>
            <Text
            pt={2} 
            textAlign={"center"}
            color={"gray.900"}>{step.text}</Text>
          </Box>
        ))}
        <Box id="outro" marginTop={"24"}>
          <div></div>
        </Box>
      </GridItem>
    </Grid>
    <Box h={48}>
 
    </Box>
  </Box>
  
);
};


export default SideStickyThing;





