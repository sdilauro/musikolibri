import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type formFieldProps = { title: string
    type?: HTMLInputTypeAttribute
    name: string
    isRequired?: boolean
    value: string | number | readonly string[]
    onChange?: ChangeEventHandler<HTMLInputElement>
    flex?:number}

function FormField(props:formFieldProps) {
        return (
            <Box sx={{ m: '0.5rem', display: 'flex', flexDir: 'row', flex:props.flex?props.flex:1, alignItems: 'self-start' }}>
                <FormControl isRequired={props.isRequired}>
                    <FormLabel>{props.title}</FormLabel>
                    <Input
                        type={props.type}
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        bg='#f6f6f6'
                    />
                </FormControl>
            </Box>
        )
}

export default FormField