import { Box, Button, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, Text, useMediaQuery, useToast, Flex, FormHelperText, Spacer, Textarea, ThemeProvider, LightMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { sendAnmeldung, sendAnmeldungToAdmin } from '../lib/api';
import { kurses_file, maxWidth, row } from "../config/config";
import { Gochi_Hand } from 'next/font/google';
import FormField from '../components/form-field';

const initValues = {
  email: '',
  name: '', 
  vorname: '', 
  adresse: '',
  plz: '',
  ort: '',
  telefon: '',
  kurse: '', 
  child: '',
  geburtsdatum: '',
  nachricht: '' }
const initState = { isLoading: false, error: '', values: initValues }

const gochi = Gochi_Hand({
  weight: '400',
  subsets: ['latin'],
})

export default function AnmeldungFormPage() {

  const [isSmallScreen] = useMediaQuery(maxWidth);
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

  useEffect(() => { console.log(state) }, [state])

  const contents: kurses_file = require('public/assets/kurses.json');
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
      await sendAnmeldungToAdmin(values);
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
  }

  return (
    <Box sx={{ w: '100%' }} className='light'>
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
            Anmeldeformular
          </Text>

        </Box>

        {error && (
          <Text color="red.300" my={4} fontSize="xl">
            {error}
          </Text>
        )}

        <FormControl isRequired isInvalid={!values.kurse}  p={"0.5rem"}  >
            <FormLabel>Kurs</FormLabel>
            <Select
              name="kurse"
              value={values.kurse}
              placeholder='Kurs auswählen'
              onChange={handleChange}
              id='kurseSelect'
              bg='#f6f6f6'
            >
              {data.map((item: row, index: number) => (
                <option color='#f6f6f6' value={index + 1} key={index} > {item.name}, {item.weekday} - {item.schedule} </option>
              ))
              }
            </Select>
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        
        <Flex alignItems={isSmallScreen ? 'stretch' : 'self-start'} flexDir={isSmallScreen ? 'column' : 'row'}>
          <FormField name='name' type='text' title='Name' isRequired value={values.name} onChange={handleChange}/>
          <FormField name='vorname' type='text' title='Vorname' isRequired value={values.vorname} onChange={handleChange}/>
        </Flex>

        <Flex flexDir={isSmallScreen ? 'column' : 'row'}>
          <FormField name='adresse' type='text' title='Straße, Hausnr.' isRequired value={values.adresse} onChange={handleChange} flex={15} />
          <Flex flex={10}>
            <FormField name='plz' type='text' title='PLZ' isRequired value={values.plz} onChange={handleChange} />
            <FormField name='ort' type='text' title='Ort' isRequired value={values.ort} onChange={handleChange} />
          </Flex>  
        </Flex>

        <Flex flexDir={isSmallScreen ? 'column' : 'row'} w={"100%"}>
          <FormField name='email' type='email' title='E-Mail' isRequired value={values.email} onChange={handleChange} />
          <FormField name='telefon' type='tel' title='Telefon / Mobil' isRequired value={values.telefon} onChange={handleChange} />
        </Flex>

        <Flex flexDir={isSmallScreen ? 'column' : 'row'}>
          <FormField name='child' type='text' title='Vorname des Kindes' isRequired value={values.child} onChange={handleChange} />
          <FormField name='geburtsdatum' type='date' title='Geburtsdatum' isRequired value={values.geburtsdatum} onChange={handleChange} />
        </Flex>
        
        <FormControl sx={{ p:"0.5rem"}}>
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
                !values.name || !values.email || !values.kurse || !values.child || !values.adresse || !values.geburtsdatum || !values.ort || !values.plz || !values.telefon || !values.vorname
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
