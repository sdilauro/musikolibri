import { Text, useToast, Container, Heading, FormControl, FormLabel, Select, FormErrorMessage, Input, Button, Textarea } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { sendKontakt, sendKontaktToAdmin } from "../lib/api"

const initValues = { email:'', name:'', message:''}
const initState = { isLoading: false, error: '', values: initValues }

export default function KontaktPage() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  useEffect(()=>{console.log(state)},[state])
 
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
      await sendKontakt(values);
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
      await sendKontaktToAdmin(values);
      setState(initState);
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
          
          <FormControl isRequired isInvalid={!values.message} mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
            value={values.message}
            onChange={handleChange}
            placeholder='Here is a sample placeholder'
            size='sm'
            name="message"
      />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

          <Button
              
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.message
        }
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}
