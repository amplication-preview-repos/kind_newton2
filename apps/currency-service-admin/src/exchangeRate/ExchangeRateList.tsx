import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExchangeRateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExchangeRates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Rate" source="rate" />
        <TextField label="LastUpdated" source="lastUpdated" />
        <TextField label="TargetCurrency" source="targetCurrency" />
        <TextField label="SourceCurrency" source="sourceCurrency" />
      </Datagrid>
    </List>
  );
};
