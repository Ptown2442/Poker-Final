import { HStack } from "@chakra-ui/react";
import usePokerDataStore from "./store";

const Status = () => {
  const { pokerData } = usePokerDataStore();
  return (
    <HStack>
      <p>currently there is {pokerData.money} dollars in your account.</p>
    </HStack>
  );
};

export default Status;
