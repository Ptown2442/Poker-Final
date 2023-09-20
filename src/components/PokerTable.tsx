import { Card, Table, Tbody, Thead } from "@chakra-ui/react";

const pokerTable = () => {
  return (
    <Table padding={"150px"} borderWidth={"50px"} border={"solid"}>
      <Thead>Hell's Kitchen</Thead>
      <Tbody>
        <Card>card</Card>
      </Tbody>
    </Table>
  );
};

export default pokerTable;
