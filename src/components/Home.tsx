import { Button, HStack } from "@chakra-ui/react";

interface Props {
  city: string;
  setCity: () => void;
  working: boolean;
  setWorking: () => void;
  isHome: boolean;
  setIsHome: () => void;
}

const Home = ({
  city,
  setCity,
  setIsHome,
  isHome,
  working,
  setWorking,
}: Props) => {
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
