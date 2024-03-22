import {
  ArrayInput,
  Create,
  DateInput,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const SeriesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="description" />
      <TextInput source="type" />
      <TextInput source="genre" />
      <TextInput source="creator" />
      <TextInput source="director" />
      <ArrayInput source="seasons">
        <SimpleFormIterator>
          <NumberInput source="season" />
          <NumberInput source="episodes" />
          <DateInput source="release" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);