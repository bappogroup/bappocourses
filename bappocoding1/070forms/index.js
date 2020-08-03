import React, { useState } from "react";
import { Container, Row, Cell } from "./styledComponents";
import { IconButton, View } from "bappo-components";
import { usePopup } from "@bappo/sdk";

export default function Test() {
  const [customers, setCustomers] = useState([
    { name: "John", address: "1 Flower Street" },
  ]);
  const popup = usePopup();

  const renderRow = (customer) => (
    <Row>
      <Cell> {customer.name}</Cell>
      <Cell> {customer.address} </Cell>
    </Row>
  );

  const addCustomer = (formData) => {
    setCustomers([...customers, formData]);
  };

  const openCustomerForm = () => {
    popup.form({
      fields: customerFields,
      onSubmit: addCustomer,
    });
  };

  return (
    <Container>
      <View style={{ alignItems: "flex-end" }}>
        <IconButton name="add" onPress={openCustomerForm} />
      </View>
      {customers.map(renderRow)}
    </Container>
  );
}

const customerFields = [
  {
    name: "name",
    type: "Text",
    label: "Customer Name",
  },
  {
    name: "address",
    type: "Text",
    label: "Address",
  },
];

// Field Types:
// Color
// Currency
// Checkbox
// Date
// Email
// FixedList
// Icon
// Month
// PhoneNumber
// Quantity
// Reference
// Text
// TextArea
// Time
// UniqueID
// Year
