import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ApiProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ApiKey" source="apiKey" />
        <TextInput label="Name" source="name" />
        <TextInput label="Endpoint" source="endpoint" />
      </SimpleForm>
    </Edit>
  );
};
