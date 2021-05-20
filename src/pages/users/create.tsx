import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button
}
  from '@chakra-ui/react';
import React from 'react';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Link from 'next/link';

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
}

// Criando um schema de Validação
const createUserFromSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido')
    .required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().required('Campo obrigatório').oneOf([null, yup.ref('password')], 'Senhas diferentes')
});


export default function CreateUser() {

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(createUserFromSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    console.log(data);
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome completo" {...register('name')} error={formState.errors.name} />
              <Input name="email" type="email" label="E-mail" {...register('email')} error={formState.errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha" {...register('password')} error={formState.errors.password} />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" {...register('password_confirmation')} error={formState.errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}