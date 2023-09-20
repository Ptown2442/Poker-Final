import { ChakraProvider } from "@chakra-ui/react";
import PokerTable from "./components/PokerTable";
import Tester from "./components/Tester";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <div>Hell's Kitchen</div>
        <Tester></Tester>
        <PokerTable></PokerTable>
      </ChakraProvider>
    </>
  );
}
