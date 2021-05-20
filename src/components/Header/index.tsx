import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {

  // A partir Tamanho lg => vísivel / antes => escondido
  // isWidenVersion => retorna o que tiver dentro, dependendo do tamanho
  const isWidenVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onOpen } = useSidebarDrawer();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >

      { !isWidenVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="open navigation"
          mr="2"
        />
      )}

      <Logo />

      { isWidenVersion && <Search />}


      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav />
        <Profile showProfileData={isWidenVersion} />
      </Flex>

    </Flex>
  )
}

