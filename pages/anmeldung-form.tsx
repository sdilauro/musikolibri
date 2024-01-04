import { Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { sendAnmeldung, sendAnmeldungToAdmin } from '../lib/api';

const initValues = { email:'', name:'', kurse:'', child:''}
const initState = { isLoading: false, error: '', values: initValues }

export default function AnmeldungFormPage() {
  type kurses_file = {
    kurses: Array<kurse>,
    rows: Array<row>
}
  type kurse = { name: string, schedule: string, days:string, color:string, id:number }
  type row = { name: string, schedule: string, days:string, color:string, id:string }
  
  
  const toast = useToast();
  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;

  useEffect(() => {
    const url = window.location.href;
    const kurs_number = url.split('#')[1]

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        kurse: kurs_number,
      },
    }))

  }, []);

  useEffect(()=>{console.log(state)},[state])

  const contents:kurses_file = require('public/assets/kurses.json');
  const data = contents.rows
 
  const handleChange = (e: { target: any; }) => {
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
      await sendAnmeldung(values);
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
    try {
      await sendAnmeldungToAdmin(values);
      // setState(initState);
      // toast({
      //   title: "Message received.",
      //   status: "success",
      //   duration: 2000,
      //   position: "top",
      // });
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

      <FormControl isRequired isInvalid={!values.kurse} mb={5}>
        <FormLabel>Kurse</FormLabel>
        <Select
            name="kurse"
            value={values.kurse}
            placeholder='Select a Kurse'
            disabled={values.kurse == '' ? false : true}
            onChange={handleChange}
            id='kurseSelect'
          >
          {data.map((item: row, index: number) => (
            <option value={index+1} key={index}> {item.name} - {item.schedule} </option>
                ))
            } 
          </Select>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      

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

      <FormControl isRequired isInvalid={!values.name} mb={5}>
        <FormLabel>Child`&apos`s name</FormLabel>
        <Input
          type="text"
          name="child"
          errorBorderColor="red.300"
          value={values.child}
          onChange={handleChange}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.kurse || !values.child 
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}
