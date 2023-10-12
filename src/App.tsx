import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Home from "./components/Home";
import Status from "./components/Status";
import { useState } from "react";

const [isHome, setIsHome] = useState(false);
const [working, setWorking] = useState(false);

export default function App() {
  return (
    <>
      <ChakraProvider>
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"50px 1fr 30px"}
          gridTemplateColumns={"150px 1fr"}
          h="100%"
          w="100%"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="2" bg="orange.300" area={"header"}>
            <Status></Status>
          </GridItem>
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            <Home />
          </GridItem>
          <GridItem pl="2" bg="green.300" area={"main"}>
            Main
          </GridItem>
          <GridItem pl="2" bg="blue.300" area={"footer"}>
            Footer
          </GridItem>
        </Grid>
      </ChakraProvider>
    </>
  );
}
