import { motion, useScroll } from "framer-motion"
import { Box } from "@chakra-ui/react"
import SideStickyThing from './components/SideStickyThing';

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>  
      <Box
        as={motion.div}
        position="fixed"
        top={0}
        left="50%"
        width="10px"
        height="100vh"
        bg="lime.100"
        style={{ scaleY: scrollYProgress }}
        transformOrigin="top"
      />
       <div className="relative">
        <SideStickyThing />
      </div>
    </>
  )
}

export default App
