import { ChakraProvider } from "@chakra-ui/react";
import PokerTable from "./components/PokerTable";

export default function App() {
  return (
    <>
      <ChakraProvider>
        <div>Hell's Kitchen</div>
        <PokerTable></PokerTable>
      </ChakraProvider>
    </>
  );
}
