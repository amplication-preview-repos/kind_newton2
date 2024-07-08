import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ExchangeRateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Rate" source="rate" />
        <DateTimeInput label="LastUpdated" source="lastUpdated" />
        <TextInput label="TargetCurrency" source="targetCurrency" />
        <TextInput label="SourceCurrency" source="sourceCurrency" />
      </SimpleForm>
    </Create>
  );
};
