import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, useToast, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { sendContactForm } from '../lib/api';

const initValues = { email:'', name:'', kurse:''}
const initState = { isLoading: false, error: '', values: initValues }

export default function Form() {
  const toast = useToast();
  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;

 
  const handleChange = (e: { target: any; }) =>{
    const target = e.target
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error:any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  }

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}


      <FormControl isRequired isInvalid={!values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={!values.kurse}
        mb={5}
      >
        <FormLabel>Kurse</FormLabel>
        <Input
          type="text"
          name="kurse"
          errorBorderColor="red.300"
          value={values.kurse}
          onChange={handleChange}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.kurse
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}
