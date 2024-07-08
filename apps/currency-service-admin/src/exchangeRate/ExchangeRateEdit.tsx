import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ExchangeRateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Rate" source="rate" />
        <DateTimeInput label="LastUpdated" source="lastUpdated" />
        <TextInput label="TargetCurrency" source="targetCurrency" />
        <TextInput label="SourceCurrency" source="sourceCurrency" />
      </SimpleForm>
    </Edit>
  );
};
