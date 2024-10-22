import React, { useEffect, useState } from 'react';
import { Box, Text, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
 
import { stepsContent } from '../../public/stepsContent';
import JohnSnow from "../../public/John_Snow.jpg"


const MapComponent = (props) => {
  const {
    zoom,
    showPopup,
    deathsInCircle,
    totalDeaths,
    cambridgeStreetCoords,
    goldenSquareCoords,
    showGoldenSquarePopup,
    carnabyStreetCoords,
    workhouseCoords
  } = props;

  const center = [51.505, -0.09]; // Broad Street pump location
  const radius = 100; // 100 yards in meters (approximately)

  const deathPercentage = ((deathsInCircle / totalDeaths) * 100) || 0; // Calculate percentage
  const color = `rgba(255, 0, 0, ${deathPercentage / 100})`; // Adjust color based on death percentage

  return (
    <MapContainer center={center} zoom={zoom} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {showPopup && (
        <Marker position={center}>
          <Popup>
            A marker at John Snow's pump location.
          </Popup>
        </Marker>
      )}
      {/* Draw the circle for deaths around the Broad Street Pump */}
      <Circle center={center} radius={radius} pathOptions={{ fillColor: color, color: color }} />

      {/* Marker for the Broad Street Pump */}
      <Marker position={center}>
        <Popup>Broad Street Pump</Popup>
      </Marker>

      {/* Marker for Cambridge Street */}
      {cambridgeStreetCoords && (
        <Marker position={cambridgeStreetCoords}>
          <Popup>Cambridge Street</Popup>
        </Marker>
      )}

      {/* Marker for Golden Square Pump */}
      {showGoldenSquarePopup && goldenSquareCoords && (
        <Marker position={goldenSquareCoords}>
          <Popup>
            Pump at Golden Square – A Different Outcome. Fewer deaths recorded around this pump.
          </Popup>
        </Marker>
      )}

      {/* Marker for Carnaby Street */}
      {carnabyStreetCoords && (
        <Marker position={carnabyStreetCoords}>
          <Popup>Carnaby Street</Popup>
        </Marker>
      )}

      {/* Workhouse Circle and Marker */}
      {workhouseCoords && ( 
        <>
          <Circle center={workhouseCoords} radius={radius} color="green" fillOpacity={0.5} />
          <Marker position={workhouseCoords}>
            <Popup>
              Workhouse: Very few cholera cases due to its private water supply.
            </Popup> 
          </Marker>
        </>
      )}
    </MapContainer>
  );
};


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
            key={activeStep}
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
            key={activeStep}
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
        <Box id="outro" marginTop={"24"}>last Box</Box>
      </GridItem>
    </Grid>
  </Box>
);
};


export default SideStickyThing;





