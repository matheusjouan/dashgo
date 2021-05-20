import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
  // não vai ser carregado no lado do servidor
  ssr: false,
});


const options = {
  // Configuração do gráfico
  chart: {
    toolbar: {
      // Remove o menu do gráfico
      show: false,
    },
    zoom: {
      enabled: false,
    },
    // Cor do eixo X e Y
    foreColor: theme.colors.gray[500],
  },
  // Configuração das linhas
  grid: {
    // Remove as linhas
    show: false,
  },
  // Label em cada ponto, mostrando valor
  dataLabels: {
    enabled: false,
  },
  // Configuração tooltop qnd passa o mouse na linha
  tooltip: {
    enabled: false,
  },
  // Configuração Eixo X
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    // Os pontos no eixo X
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ]
  },
  // Configuração do preenchimento/cor do gráfico
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" w="100%" maxWidth={1480} mx="auto">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />



          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}