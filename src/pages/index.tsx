import { Input } from '../components/Form/Input';
import { Flex, Button, Stack } from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

// Criando um schema de Validação
const signInFromSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {


  // Parâmetro useForm p/ validação de dados com Yup
  // objeto resolver, que vai receber yupResolver com o schema de validação
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFromSchema)
  });

  // data => valores dos campos referenciado pelo react-hook-form
  // SubmitHandler => Tipagem do react-hook-form
  // SignInFormData => Tipagem dos dados "data"
  const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
    console.log(data);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">

          <Input
            name="email"
            label="E-mail"
            type="email"
            {...register('email')}
            error={formState.errors.email}
          />

          <Input
            name="password"
            label="Senha"
            type="password"
            {...register('password')}
            error={formState.errors.password}

          />

        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          // Botão de carregamento até finalizar uma ação
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}

