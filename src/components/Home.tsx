import { Button, HStack } from "@chakra-ui/react";
import usePokerDataStore from "./store";

const Home = () => {
  const { pokerData, setHouse } = usePokerDataStore();
  return (
    <HStack>
      <ul className="main-list">
        <li className="main-list-item">Visit House</li>
        <Button onClick={setIsHome}></Button>
        <li className="main-list-item">Travel</li>
        <Button></Button>
        <li className="main-list-item">Hit the tables</li>
        <Button></Button>
      </ul>
    </HStack>
  );
};

export default Home;
