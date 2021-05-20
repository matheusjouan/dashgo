import {
  Input as InputChakra, FormLabel, FormControl, FormErrorMessage,
  InputProps as InputPropsChakra
} from '@chakra-ui/react'

import { forwardRef, ForwardRefRenderFunction } from 'react';

// Tipagem do erro vindo do React Hook Form
import { FieldError } from 'react-hook-form';

// Pega as demais propriedades do Input do Chakra p/ passar como ...rest
interface InputProps extends InputPropsChakra {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({ name, label, error = null, ...rest }, ref) => {

    return (
      <FormControl isInvalid={!!error}>
        {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <InputChakra
          name={name}
          id={name}
          focusBorderColor="pink.500"
          bg="gray.900"
          variant="filled"
          _hover={{
            bg: 'gray.900'
          }}
          size="lg"
          ref={ref}
          // Aceita as demais props padrão do Input do Chakra
          {...rest}
        />

        {!!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}

      </FormControl>
    )
  }

export const Input = forwardRef(InputBase);