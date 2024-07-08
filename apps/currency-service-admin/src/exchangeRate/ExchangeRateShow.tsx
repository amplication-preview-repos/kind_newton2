import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ExchangeRateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Rate" source="rate" />
        <TextField label="LastUpdated" source="lastUpdated" />
        <TextField label="TargetCurrency" source="targetCurrency" />
        <TextField label="SourceCurrency" source="sourceCurrency" />
      </SimpleShowLayout>
    </Show>
  );
};
