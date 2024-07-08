import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApiProviderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ApiKey" source="apiKey" />
        <TextInput label="Name" source="name" />
        <TextInput label="Endpoint" source="endpoint" />
      </SimpleForm>
    </Create>
  );
};
