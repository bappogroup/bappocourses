import React, { useEffect, useState } from "react";
import { Button, ScrollView, View, Text, styled } from "bappo-components";
import { useModel } from "@bappo/sdk";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const Customer = useModel("Customer");
  useEffect(() => loadData(), []);

  const loadData = async () => {
    const customers = await Customer.findAll({
      limit: 200,
      order: [["name", "ASC"]],
    });
    setCustomers(customers);
  };

  const renderRow = (customer) => (
    <Row>
      <Text>{customer.name}</Text>
    </Row>
  );

  return <ScrollView>{customers.map(renderRow)}</ScrollView>;
}

const Row = styled(View)`
  margin: 3px 18px;
  background-color: #f8f8f8;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
