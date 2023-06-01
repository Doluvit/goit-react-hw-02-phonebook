import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import {
  Container,
  Input,
  Label,
  Wrapper,
  ErrorMsg,
  Btn,
} from './contactForm.styled.js';

// const nanoid = customAlphabet('1234567890', 3);

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
 });

const inValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = ({onSubmit}) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={inValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Container>
          <Wrapper>
            <Label htmlFor="name">Name:</Label>
            <Input name="name" type="text" id="name" />
            <ErrorMsg name="name" component="div" />
          </Wrapper>

          <Wrapper>
            <Label htmlFor="number">Number:</Label>
            <Input name="number" type="tel" id="number" />
            <ErrorMsg name="number" component="div" />
          </Wrapper>

          <Btn type="submit">Add contact</Btn>
        </Container>
      </Formik>
    </>
  );
};
