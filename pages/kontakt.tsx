import React, { useEffect } from 'react';
import { Box, Button, Container, Flex, FormControl, FormLabel, Image, Text, Textarea, useMediaQuery, useToast } from "@chakra-ui/react";
import { Gochi_Hand } from "next/font/google";
import { useState } from "react";
import FormField from "../components/form-field";
import { maxWidth } from "../config/config";
import { sendKontakt, sendKontaktToAdmin } from "../lib/api";

const initValues = {
  email: '',
  name: '',
  nachricht: ''
}
const initState = { isLoading: false, error: '', values: initValues }

const gochi = Gochi_Hand({
  weight: '400',
  subsets: ['latin'],
})

export default function KontaktPage() {
  useEffect(() => {
    document.title = 'Kontakt - Musikolibri Bochum';
  }, []);

  const [isSmallScreen] = useMediaQuery(maxWidth);
  const toast = useToast();
  const [state, setState] = useState(initState);

  const { values, isLoading, error } = state;


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
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
    try {
      await sendKontaktToAdmin(values);
      // setState(initState);
      // toast({
      //   title: "Message received.",
      //   status: "success",
      //   duration: 2000,
      //   position: "top",
      // });
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
    window.location.href = '/danke';
  }

  return (
    <Box sx={{ w: '100%', flex: 1, minH: '100vh', alignItems: 'flex-start' }} className='light' >
      <Container maxW="650px" mt={12}>
        <Box sx={{ paddingY: '2rem', paddingBottom: '3rem', display: 'flex', flexDir: 'column' }}>
          <Text
            noOfLines={2}
            bgGradient='linear(to-l, #7A59CA, #E6175B)'
            bgClip='text'
            className={gochi.className}
            fontSize='5xl'
            align={'center'}
          >
            Kontaktformular
          </Text>

        </Box>

        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}


        <Flex alignItems={isSmallScreen ? 'stretch' : 'self-start'} flexDir={isSmallScreen ? 'column' : 'row'}>
          <FormField name='name' type='text' title='Name' isRequired value={values.name} onChange={handleChange} />
        </Flex>

        <Flex flexDir={isSmallScreen ? 'column' : 'row'} w={"100%"}>
          <FormField name='email' type='email' title='E-Mail' isRequired value={values.email} onChange={handleChange} />
        </Flex>

        <FormControl sx={{ p: "0.5rem" }} isRequired>
          <FormLabel>Hinterlasse deine Nachricht</FormLabel>
          <Textarea

            name='nachricht'
            value={values.nachricht}
            onChange={handleChange}
            bg='#f6f6f6'
          />
        </FormControl>

        <Flex justifyContent={'center'} alignItems={'center'} flexDir={isSmallScreen ? 'column' : 'row'} my={'2rem'}>
          <Text
            noOfLines={2}
            bgGradient='linear(to-l, #7A59CA, #E6175B)'
            bgClip='text'
            className={gochi.className}
            fontSize='4xl'
            align={'center'}
            mx={'1rem'}
          >
            Lass uns Musik machen!
          </Text>

          <Button
            colorScheme='purple'
            variant='solid'
            borderRadius={"1.5rem"}
            height={"3rem"}
            isLoading={isLoading}
            isDisabled={
              !values.name || !values.email || !values.nachricht
            }
            onClick={onSubmit}

            mx={'5rem'}
          >
            Absenden
          </Button>

        </Flex>

      </Container>
    </Box>
  )
}