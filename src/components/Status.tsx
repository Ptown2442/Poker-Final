import { HStack } from "@chakra-ui/react";

interface Props {
  money: number;
}

const Status = ({ money }: Props) => {
  return (
    <HStack>
      <p>currently there is {money} dollars in your account.</p>
    </HStack>
  );
};

export default Status;
